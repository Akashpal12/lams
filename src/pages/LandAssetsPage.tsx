import React from 'react';
import { Plus, Search, MoreHorizontal, Filter, Eye } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { LandAsset } from '../types';

interface LandAssetsPageProps {
  assets: LandAsset[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  orgFilter: string;
  onOrgFilterChange: (o: string) => void;
  typeFilter: string;
  onTypeFilterChange: (t: string) => void;
  statusFilter: string;
  onStatusFilterChange: (s: string) => void;
  onOpenAddModal: () => void;
  onSelectAsset: (asset: LandAsset) => void;
}

export const LandAssetsPage: React.FC<LandAssetsPageProps> = ({
  assets,
  searchQuery,
  onSearchChange,
  orgFilter,
  onOrgFilterChange,
  typeFilter,
  onTypeFilterChange,
  statusFilter,
  onStatusFilterChange,
  onOpenAddModal,
  onSelectAsset
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Land Assets</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">Manage all land parcels</p>
        </div>
        <Button variant="primary" icon={<Plus className="w-4 h-4" />} onClick={onOpenAddModal}>
          Add Land Asset
        </Button>
      </div>

      {/* Filters bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by survey number, owner..."
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <select
            value={orgFilter}
            onChange={(e) => onOrgFilterChange(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none"
          >
            <option value="All Organizations">All Organizations</option>
            <option value="Green Valley Estates">Green Valley Estates</option>
            <option value="Sunrise Developers">Sunrise Developers</option>
            <option value="Vibrant Infrastructure">Vibrant Infrastructure</option>
            <option value="Ravi Kumar">Ravi Kumar</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => onTypeFilterChange(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none"
          >
            <option value="Land Type">Land Type</option>
            <option value="Agricultural">Agricultural</option>
            <option value="Commercial">Commercial</option>
            <option value="Residential">Residential</option>
            <option value="Forest">Forest</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:outline-none"
          >
            <option value="Status">Status</option>
            <option value="Owned">Owned</option>
            <option value="Leased">Leased</option>
            <option value="Under Dispute">Under Dispute</option>
            <option value="Sold">Sold</option>
          </select>

          <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-gray-50/75 border-b border-gray-200 text-gray-500 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Survey No.</th>
                <th className="py-3 px-4">Organization/Owner</th>
                <th className="py-3 px-4">Village</th>
                <th className="py-3 px-4">District</th>
                <th className="py-3 px-4 text-right">Area (Acres)</th>
                <th className="py-3 px-4">Land Type</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800 font-medium">
              {assets.map((asset, index) => (
                <tr key={asset.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-3 px-4 text-gray-500">{index + 1}</td>
                  <td className="py-3 px-4 font-bold text-gray-900 cursor-pointer hover:text-primary" onClick={() => onSelectAsset(asset)}>
                    {asset.surveyNo}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{asset.organizationOwner}</td>
                  <td className="py-3 px-4 text-gray-600">{asset.village}</td>
                  <td className="py-3 px-4 text-gray-600">{asset.district}</td>
                  <td className="py-3 px-4 text-right font-semibold">{asset.area.toFixed(2)}</td>
                  <td className="py-3 px-4"><Badge status={asset.landType} /></td>
                  <td className="py-3 px-4"><Badge status={asset.status} /></td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => onSelectAsset(asset)}
                        className="p-1 rounded hover:bg-emerald-50 text-emerald-600 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-200 text-gray-500 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {assets.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-gray-400 font-normal">
                    No land assets found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 font-medium">
          <span>Showing 1 to {assets.length} of 2,460 entries</span>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">&lt;</button>
            <button className="px-2.5 py-1 rounded bg-primary text-white font-bold">1</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">2</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">3</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">4</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">5</button>
            <span className="px-2">...</span>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">308</button>
            <button className="px-2.5 py-1 rounded border border-gray-200 bg-white hover:bg-gray-100">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};
