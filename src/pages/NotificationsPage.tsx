import React from 'react';
import { Bell, CheckCircle2, Clock } from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationsPageProps {
  notifications: NotificationItem[];
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({ notifications }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Notifications</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Stay updated with system alerts and activities</p>
        </div>
        <button className="text-xs font-semibold text-primary hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="flex gap-2 border-b border-gray-200 pb-3">
        <button className="px-4 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold">All (5)</button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200">System (2)</button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200">Survey (1)</button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200">Legal (1)</button>
        <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200">Document (1)</button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-xs divide-y divide-gray-100">
        {notifications.map((notif) => (
          <div key={notif.id} className={`p-4 flex items-start justify-between gap-4 transition-colors ${notif.unread ? 'bg-emerald-50/40' : 'hover:bg-gray-50'}`}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-gray-900">{notif.title}</h4>
                  {notif.unread && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                </div>
                <p className="text-xs text-gray-600 mt-0.5">{notif.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {notif.timeAgo}</span>
              <button className="p-1 hover:text-emerald-600 rounded" title="Mark as read">
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
