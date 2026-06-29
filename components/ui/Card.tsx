import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}