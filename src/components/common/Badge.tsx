import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  status: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, className }) => {
  const normalized = status.toLowerCase();

  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        {
          'bg-emerald-100 text-emerald-800': normalized === 'active' || normalized === 'owned',
          'bg-blue-100 text-blue-800': normalized === 'leased' || normalized === 'company',
          'bg-amber-100 text-amber-800': normalized === 'under dispute' || normalized === 'individual' || normalized === 'pending',
          'bg-red-100 text-red-800': normalized === 'inactive' || normalized === 'sold',
          'bg-gray-100 text-gray-800': !['active', 'owned', 'leased', 'company', 'under dispute', 'individual', 'pending', 'inactive', 'sold'].includes(normalized)
        },
        className
      )}
    >
      {status}
    </span>
  );
};
