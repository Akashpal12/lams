import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:pointer-events-none',
        {
          'bg-primary hover:bg-primary-hover text-white': variant === 'primary',
          'bg-gray-100 hover:bg-gray-200 text-gray-800': variant === 'secondary',
          'border border-gray-300 hover:bg-gray-50 text-gray-700': variant === 'outline',
          'bg-red-600 hover:bg-red-700 text-white': variant === 'danger',
          'text-xs px-2.5 py-1.5 gap-1.5': size === 'sm',
          'text-sm px-4 py-2 gap-2': size === 'md',
          'text-base px-5 py-2.5 gap-2.5': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
