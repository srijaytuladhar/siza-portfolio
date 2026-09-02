import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type RetroButtonProps = {
    children: React.ReactNode;
    variant?: 'green' | 'yellow';
    as?: React.ElementType;
    className?: string;
} & React.AllHTMLAttributes<HTMLElement>;

const RetroButton = ({
    children,
    variant = 'green',
    className,
    as: Component = 'button',
    ...props
}: RetroButtonProps) => {
    const variantClass = variant === 'green' ? 'pixel-border-green text-retro-green' : 'pixel-border-yellow text-retro-yellow';
    const hoverClass = variant === 'green' ? 'hover:bg-retro-green hover:text-retro-black' : 'hover:bg-retro-yellow hover:text-retro-black';

    return (
        <Component
            className={cn(
                variantClass,
                hoverClass,
                'px-6 py-2 m-2 transition-colors duration-200 active:translate-y-1 font-bold inline-flex items-center justify-center gap-2 cursor-pointer text-center select-none',
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default RetroButton;

