import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-[#1d1d1f] text-white shadow-sm hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200",
    secondary:
        "border border-black/10 bg-white/70 text-[#1d1d1f] backdrop-blur hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
    ghost:
        "text-[#1d1d1f] hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
};

type BaseButtonProps = {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
};

type NativeButtonProps = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
    };

type AnchorButtonProps = BaseButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    ...props
}: ButtonProps) {
    const classes = cn(
        "inline-flex items-center justify-center rounded-full font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    if (href) {
        return (
            <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}