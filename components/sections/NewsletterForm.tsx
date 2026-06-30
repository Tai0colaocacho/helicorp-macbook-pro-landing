"use client";

import { ArrowRight, Bell, CheckCircle2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  preorderSchema,
  type PreorderFormValues,
} from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const selectClassName =
  "mt-2 h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm font-medium text-[#1d1d1f] outline-none transition focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 dark:border-white/10 dark:bg-neutral-900 dark:text-white";

const optionClassName =
  "bg-white text-[#1d1d1f] dark:bg-neutral-950 dark:text-white";

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PreorderFormValues>({
    resolver: zodResolver(preorderSchema),
    defaultValues: {
      fullName: "",
      email: "",
      purpose: "developer",
      preferredModel: "macbook-pro-m5",
    },
  });

  async function onSubmit(values: PreorderFormValues) {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      toast.error("Submission failed. Please check your information.");
      return;
    }

    toast.success("You're on the MacBook Pro update list.");
    reset({
      fullName: "",
      email: "",
      purpose: "developer",
      preferredModel: "macbook-pro-m5",
    });
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f5f7] px-6 py-24 dark:bg-black"
    >
      <div className="absolute inset-x-0 top-20 mx-auto h-80 max-w-5xl rounded-full bg-[radial-gradient(circle,#dbeafe_0%,transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,#1e3a8a_0%,transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Get Notified"
              title="Be first to experience the next pro workflow."
              description="Join the update list to receive MacBook Pro product news, configuration suggestions and launch information."
              align="left"
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={Bell}
                title="Product Updates"
                description="Receive important product and launch information."
              />
              <InfoCard
                icon={Mail}
                title="No Spam"
                description="Only relevant updates about this product concept."
              />
              <InfoCard
                icon={CheckCircle2}
                title="Validated Form"
                description="Client and server validation with Zod."
              />
            </div>
          </div>

          <Card className="rounded-[2rem] p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-[#1d1d1f] dark:text-white"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Huynh Phat Tai"
                  {...register("fullName")}
                  className="mt-2 h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-[#1d1d1f] outline-none transition placeholder:text-neutral-400 focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
                />
                {errors.fullName ? (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#1d1d1f] dark:text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="mt-2 h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-[#1d1d1f] outline-none transition placeholder:text-neutral-400 focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="purpose"
                    className="text-sm font-medium text-[#1d1d1f] dark:text-white"
                  >
                    Purpose
                  </label>
                  <select
                    id="purpose"
                    {...register("purpose")}
                    className={selectClassName}
                  >
                    <option value="student" className={optionClassName}>
                      Student
                    </option>
                    <option value="developer" className={optionClassName}>
                      Developer
                    </option>
                    <option value="designer" className={optionClassName}>
                      Designer
                    </option>
                    <option value="business" className={optionClassName}>
                      Business
                    </option>
                  </select>
                  {errors.purpose ? (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.purpose.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="preferredModel"
                    className="text-sm font-medium text-[#1d1d1f] dark:text-white"
                  >
                    Preferred model
                  </label>
                  <select
                    id="preferredModel"
                    {...register("preferredModel")}
                    className={selectClassName}
                  >
                    <option value="macbook-pro-m5" className={optionClassName}>
                      MacBook Pro M5
                    </option>
                    <option
                      value="macbook-pro-m5-pro"
                      className={optionClassName}
                    >
                      MacBook Pro M5 Pro
                    </option>
                    <option
                      value="macbook-pro-m5-max"
                      className={optionClassName}
                    >
                      MacBook Pro M5 Max
                    </option>
                  </select>
                  {errors.preferredModel ? (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.preferredModel.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get MacBook Pro Updates"}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-center text-xs leading-5 text-[#6e6e73] dark:text-neutral-500">
                This is a demo form for a landing page development test. Your
                information is only used for validating the form flow.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

type InfoCardProps = {
  icon: typeof Bell;
  title: string;
  description: string;
};

function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-black/5 bg-white/70 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
        <Icon className="h-5 w-5" />
      </span>

      <h3 className="mt-5 text-base font-semibold text-[#1d1d1f] dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#6e6e73] dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}