import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface PixelBorderProps {
    children: React.ReactNode;
    variant?: 'white' | 'green' | 'yellow';
    className?: string;
    as?: React.ElementType;
}

const PixelBorder = ({
    children,
    variant = 'white',
    className,
    as: Component = 'div'
}: PixelBorderProps) => {
    const variantClass = {
        white: 'pixel-border',
        green: 'pixel-border-green text-retro-green',
        yellow: 'pixel-border-yellow text-retro-yellow',
    }[variant];

    return (
        <Component className={cn(variantClass, 'p-4 m-2', className)}>
            {children}
        </Component>
    );
};

export default PixelBorder;
