import React from 'react';
import { Building2, MapPin, Globe, Scale, Calendar, ChevronDown, Clock, AlertCircle } from 'lucide-react';
import { Activity, TaskItem } from '../types';

interface DashboardPageProps {
  activities: Activity[];
  tasks: TaskItem[];
  onNavigateToAssets: () => void;
  onNavigateToOrganizations: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  activities,
  tasks,
  onNavigateToAssets,
  onNavigateToOrganizations
}) => {
  return (
    <div className="space-y-6">
      {/* Top Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Overview of your land assets and activities</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 shadow-xs">
            <Calendar className="w-4 h-4 text-primary" />
            <span>01 Jan 2024 - 31 Dec 2024</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 shadow-xs cursor-pointer">
            <span>All Organizations</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div onClick={onNavigateToOrganizations} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Organizations</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">128</span>
          </div>
        </div>

        <div onClick={onNavigateToAssets} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Land Parcels</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">2,460</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Area (Acres)</span>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">12,850</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Legal Cases</span>
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">36</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Land Distribution */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Land Distribution</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Donut Chart Simulation */}
            <div className="relative w-40 h-40 rounded-full border-8 border-emerald-500 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <span className="text-lg font-bold text-gray-900">12,850</span>
                <p className="text-[10px] text-gray-500 font-semibold uppercase">Acres</p>
              </div>
            </div>
            {/* Breakdown List */}
            <div className="flex-1 space-y-2.5 w-full text-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium text-gray-700">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  Agricultural (63.8%)
                </span>
                <span className="font-bold text-gray-900">8,200</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium text-gray-700">
                  <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block"></span>
                  Residential (7.4%)
                </span>
                <span className="font-bold text-gray-900">950</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium text-gray-700">
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  Commercial (11.7%)
                </span>
                <span className="font-bold text-gray-900">1,500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium text-gray-700">
                  <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
                  Forest (11.7%)
                </span>
                <span className="font-bold text-gray-900">1,500</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium text-gray-700">
                  <span className="w-3 h-3 rounded-full bg-gray-400 inline-block"></span>
                  Other (7.4%)
                </span>
                <span className="font-bold text-gray-900">950</span>
              </div>
            </div>
          </div>
        </div>

        {/* Parcels by State/District */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Parcels by State/District</h3>
            <button onClick={onNavigateToAssets} className="text-xs font-semibold text-primary hover:underline">View All</button>
          </div>
          <div className="h-44 flex items-end justify-between gap-4 pt-6 px-4 border-b border-gray-100">
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-[10px] font-bold text-gray-600">850</span>
              <div className="w-full bg-emerald-600 rounded-t-md h-32"></div>
              <span className="text-[10px] font-medium text-gray-500">Telangana</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-[10px] font-bold text-gray-600">620</span>
              <div className="w-full bg-cyan-500 rounded-t-md h-24"></div>
              <span className="text-[10px] font-medium text-gray-500">UP</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-[10px] font-bold text-gray-600">450</span>
              <div className="w-full bg-emerald-500 rounded-t-md h-18"></div>
              <span className="text-[10px] font-medium text-gray-500">Maharashtra</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-[10px] font-bold text-gray-600">320</span>
              <div className="w-full bg-amber-400 rounded-t-md h-12"></div>
              <span className="text-[10px] font-medium text-gray-500">Bihar</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-[10px] font-bold text-gray-600">220</span>
              <div className="w-full bg-gray-300 rounded-t-md h-8"></div>
              <span className="text-[10px] font-medium text-gray-500">Other</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities & Upcoming Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Recent Activities</h3>
          </div>
          <div className="space-y-4">
            {activities.map((act) => (
              <div key={act.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-none">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{act.title}</h4>
                    <p className="text-xs text-gray-500">{act.description}</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-gray-400">{act.timeAgo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Upcoming Tasks</h3>
            <span className="text-xs font-semibold text-primary cursor-pointer hover:underline">View All</span>
          </div>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-none">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{task.title}</h4>
                    <p className="text-xs text-gray-500">{task.caseNo}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-[10px] font-bold rounded-md ${task.statusColor === 'orange' ? 'bg-orange-100 text-orange-700' : task.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                  {task.dueDate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
