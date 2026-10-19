import React from 'react';
import {
  LayoutDashboard,
  Building2,
  Users,
  MapPin,
  Globe,
  FileText,
  Scale,
  ClipboardList,
  ShieldAlert,
  BarChart3,
  Bell,
  Settings
} from 'lucide-react';
import { NavTab } from '../../types';
import clsx from 'clsx';

interface SidebarProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  notificationCount?: number;
}

interface NavItem {
  id: NavTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'organizations', label: 'Organizations', icon: Building2 },
  { id: 'users', label: 'Users & Roles', icon: Users },
  { id: 'land-assets', label: 'Land Assets', icon: MapPin },
  { id: 'gis-map', label: 'GIS & Maps', icon: Globe },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'litigation', label: 'Litigation', icon: Scale },
  { id: 'survey-ops', label: 'Survey & Field Ops', icon: ClipboardList },
  { id: 'encroachment', label: 'Encroachment', icon: ShieldAlert },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
  { id: 'notifications', label: 'Notifications', icon: Bell, badge: 5 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onTabChange, notificationCount = 5 }) => {
  return (
    <aside className="w-64 bg-[#0B2217] text-white flex flex-col h-screen sticky top-0 shrink-0 select-none">
      {/* Brand Header */}
      <div className="p-5 flex items-center gap-3 border-b border-emerald-900/40">
        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-white shadow-md">
          🌿
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
            Vibrant
          </h1>
          <p className="text-xs text-emerald-400/80 font-medium">Land Asset Management</p>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={clsx(
                'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group',
                {
                  'bg-emerald-600 text-white shadow-sm': isActive,
                  'text-emerald-100/70 hover:bg-white/5 hover:text-white': !isActive,
                }
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className={clsx('w-5 h-5 transition-transform group-hover:scale-105', isActive ? 'text-white' : 'text-emerald-400')} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={clsx('px-2 py-0.5 text-xs font-semibold rounded-full', isActive ? 'bg-white text-emerald-800' : 'bg-red-500 text-white')}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
