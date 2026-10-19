import React from 'react';
import { Plus, Search, MoreHorizontal, Filter } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Organization } from '../types';

interface OrganizationsPageProps {
  organizations: Organization[];
  filteredOrganizations: Organization[];
  activeTab: 'All' | 'Company' | 'Individual' | 'Active' | 'Inactive';
  onTabChange: (tab: 'All' | 'Company' | 'Individual' | 'Active' | 'Inactive') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  typeFilter: string;
  onTypeFilterChange: (t: string) => void;
  statusFilter: string;
  onStatusFilterChange: (s: string) => void;
  onOpenAddModal: () => void;
}

export const OrganizationsPage: React.FC<OrganizationsPageProps> = ({
  organizations,
  filteredOrganizations,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  statusFilter,
  onStatusFilterChange,
  onOpenAddModal
}) => {
  const counts = {
    All: organizations.length,
    Company: organizations.filter(o => o.type === 'Company').length,
    Individual: organizations.filter(o => o.type === 'Individual').length,
    Active: organizations.filter(o => o.status === 'Active').length,
    Inactive: organizations.filter(o => o.status === 'Inactive').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Organizations</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Manage companies and individual landowners</p>
        </div>
        <Button variant="primary" icon={<Plus className="w-4 h-4" />} onClick={onOpenAddModal}>
          Add Organization
        </Button>
      </div>

      {/* Tabs & Filters bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-3">
          {(['All', 'Company', 'Individual', 'Active', 'Inactive'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab} ({counts[tab]})
            </button>
          ))}
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search organization..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <select
              value={typeFilter}
              onChange={(e) => onTypeFilterChange(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none"
            >
              <option value="Type">Type</option>
              <option value="Company">Company</option>
              <option value="Individual">Individual</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => onStatusFilterChange(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none"
            >
              <option value="Status">Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50/75 border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Organization Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Contact Person</th>
                <th className="py-3 px-4 text-right">Land Parcels</th>
                <th className="py-3 px-4 text-right">Total Area (Acres)</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800 font-medium">
              {filteredOrganizations.map((org, index) => (
                <tr key={org.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                  <td className="py-3 px-4 font-bold text-gray-900">{org.name}</td>
                  <td className="py-3 px-4"><Badge status={org.type} /></td>
                  <td className="py-3 px-4 text-gray-700">{org.contactPerson}</td>
                  <td className="py-3 px-4 text-right font-semibold">{org.landParcels || Math.floor(Math.random() * 500 + 10)}</td>
                  <td className="py-3 px-4 text-right font-semibold">{org.totalArea || Math.floor(Math.random() * 2000 + 50)}</td>
                  <td className="py-3 px-4"><Badge status={org.status} /></td>
                  <td className="py-3 px-4 text-center">
                    <button className="p-1 rounded hover:bg-gray-200 text-gray-500 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredOrganizations.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-gray-400 font-normal">
                    No organizations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 font-medium">
          <span>Showing 1 to {filteredOrganizations.length} of 128 entries</span>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50">&lt;</button>
            <button className="px-2.5 py-1 rounded bg-primary text-white font-bold">1</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">2</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">3</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};
