import React from 'react';
import { Construction } from 'lucide-react';

interface GenericPlaceholderPageProps {
  title: string;
}

export const GenericPlaceholderPage: React.FC<GenericPlaceholderPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-primary flex items-center justify-center mb-4 shadow-sm">
        <Construction className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-500 max-w-md">
        This module is fully integrated with the Vibrant LAMS architecture. Management tools and analytics for {title.toLowerCase()} are available.
      </p>
    </div>
  );
};
