import { NextResponse } from "next/server";
import { preorderSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = preorderSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Invalid form data.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const payload = {
      ...result.data,
      submittedAt: new Date().toISOString(),
      source: "macbook-pro-landing-page",
    };

    const webhookUrl = process.env.WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            message: "Webhook request failed.",
          },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({
      message: "Subscription submitted successfully.",
      data: payload,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}