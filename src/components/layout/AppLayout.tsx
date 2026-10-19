import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { NavTab, User } from '../../types';

interface AppLayoutProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  user: User;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNotificationClick: () => void;
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  currentTab,
  onTabChange,
  user,
  searchQuery,
  onSearchChange,
  onNotificationClick,
  children
}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentTab={currentTab} onTabChange={onTabChange} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          user={user}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onNotificationClick={onNotificationClick}
        />
        <main className="flex-1 p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
