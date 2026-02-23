import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'green' | 'yellow';
}

const RetroButton = ({
    children,
    variant = 'green',
    className,
    ...props
}: RetroButtonProps) => {
    const variantClass = variant === 'green' ? 'pixel-border-green' : 'pixel-border-yellow';
    const hoverClass = variant === 'green' ? 'hover:bg-retro-green hover:text-white' : 'hover:bg-retro-yellow hover:text-white';

    return (
        <button
            className={cn(
                variantClass,
                hoverClass,
                'px-6 py-2 m-2 transition-colors duration-200 active:translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default RetroButton;
