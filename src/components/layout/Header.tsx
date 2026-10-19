import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { User } from '../../types';

interface HeaderProps {
  user: User;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNotificationClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  searchQuery,
  onSearchChange,
  onNotificationClick,
}) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      {/* Search Bar */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search anything..."
          className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      {/* Right User & Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button
          onClick={onNotificationClick}
          className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        <div className="h-6 w-px bg-gray-200"></div>

        {/* User Profile Info */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            {user.name.charAt(0)}
          </div>
          <div className="hidden md:block text-left">
            <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-1">
              {user.name}
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <div className="text-xs text-gray-500 font-medium">{user.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
