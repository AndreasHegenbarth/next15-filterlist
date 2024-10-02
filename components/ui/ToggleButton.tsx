import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '@/utils/cn';

export type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  active?: boolean;
  className?: string;
};

export default function ToggleButton({
  children,
  type,
  active,
  className,
  ...otherProps
}: Props & React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      {...otherProps}
      type={type}
      className={cn(
        active ? 'bg-primary text-white' : 'bg-white text-black',
        'border-primary w-fit rounded border px-4 py-2 disabled:border-gray-500 disabled:opacity-50',
      )}
    >
      {children}
    </button>
  );
}
