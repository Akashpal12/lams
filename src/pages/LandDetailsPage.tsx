import React, { useState } from 'react';
import { ArrowLeft, Edit, MoreHorizontal, MapPin, FileText, Globe, ClipboardList, ShieldAlert, History as HistoryIcon } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { LandAsset } from '../types';

interface LandDetailsPageProps {
  asset: LandAsset;
  onBack: () => void;
  onOpenUploadModal: () => void;
  onOpenSurveyModal: () => void;
  onViewOnMap: () => void;
}

export const LandDetailsPage: React.FC<LandDetailsPageProps> = ({
  asset,
  onBack,
  onOpenUploadModal,
  onOpenSurveyModal,
  onViewOnMap
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'location' | 'ownership' | 'documents' | 'survey' | 'legal' | 'history'>('overview');

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              Land Details - Survey No. {asset.surveyNo}
            </h2>
            <p className="text-xs text-emerald-700 font-semibold mt-0.5">{asset.organizationOwner}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" icon={<Edit className="w-4 h-4" />} size="sm">
            Edit
          </Button>
          <Button variant="secondary" icon={<MoreHorizontal className="w-4 h-4" />} size="sm">
            More
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sub-navigation */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs h-fit space-y-1">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeSubTab === 'overview' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <FileText className="w-4 h-4" /> Overview
          </button>
          <button
            onClick={() => setActiveSubTab('location')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeSubTab === 'location' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <MapPin className="w-4 h-4" /> Location & Map
          </button>
          <button
            onClick={() => setActiveSubTab('ownership')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeSubTab === 'ownership' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <Globe className="w-4 h-4" /> Ownership
          </button>
          <button
            onClick={() => { setActiveSubTab('documents'); onOpenUploadModal(); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeSubTab === 'documents' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <FileText className="w-4 h-4" /> Documents
          </button>
          <button
            onClick={() => { setActiveSubTab('survey'); onOpenSurveyModal(); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeSubTab === 'survey' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <ClipboardList className="w-4 h-4" /> Survey Details
          </button>
          <button
            onClick={() => setActiveSubTab('legal')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeSubTab === 'legal' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <ShieldAlert className="w-4 h-4" /> Legal Info
          </button>
          <button
            onClick={() => setActiveSubTab('history')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeSubTab === 'history' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <HistoryIcon className="w-4 h-4" /> History
          </button>
        </div>

        {/* Right Main Content Details */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Thumbnail Map image preview */}
              <div className="relative bg-emerald-900 rounded-lg overflow-hidden h-52 flex items-center justify-center text-white shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px] opacity-30"></div>
                <div className="relative text-center p-4">
                  <MapPin className="w-10 h-10 text-emerald-400 mx-auto mb-2 animate-bounce" />
                  <span className="text-xs font-bold text-emerald-200">Survey No. {asset.surveyNo}</span>
                  <p className="text-[10px] text-emerald-300/80">{asset.village}, {asset.district}</p>
                </div>
              </div>

              {/* Asset Attribute Details */}
              <div className="md:col-span-2 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-gray-400 font-medium block">Survey Number</span>
                    <span className="font-bold text-gray-900 text-sm">{asset.surveyNo}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium block">Area</span>
                    <span className="font-bold text-gray-900 text-sm">{asset.area.toFixed(2)} Acres</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium block">Village</span>
                    <span className="font-semibold text-gray-800">{asset.village}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium block">Mandal</span>
                    <span className="font-semibold text-gray-800">{asset.mandal || 'Serilingampally'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium block">District</span>
                    <span className="font-semibold text-gray-800">{asset.district}, Telangana</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium block">Owner</span>
                    <span className="font-semibold text-gray-800">{asset.organizationOwner}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-gray-400 font-medium block mb-1">Land Type</span>
                    <Badge status={asset.landType} />
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium block mb-1">Status</span>
                    <Badge status={asset.status} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GPS Coordinates Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="text-base font-bold text-gray-900 mb-4">GPS Coordinates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-[10px] text-gray-400 font-semibold uppercase block">Latitude</span>
                <span className="text-sm font-bold text-gray-800">{asset.coordinates?.latitude || 17.4456}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-[10px] text-gray-400 font-semibold uppercase block">Longitude</span>
                <span className="text-sm font-bold text-gray-800">{asset.coordinates?.longitude || 78.3489}</span>
              </div>
              <div>
                <Button variant="primary" onClick={onViewOnMap} className="w-full">
                  View on Map
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Action Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div onClick={onOpenUploadModal} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs hover:border-primary transition-colors cursor-pointer text-center group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-900 block">Documents (8)</span>
            </div>

            <div onClick={onViewOnMap} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs hover:border-primary transition-colors cursor-pointer text-center group">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-900 block">Map View</span>
            </div>

            <div onClick={onOpenSurveyModal} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs hover:border-primary transition-colors cursor-pointer text-center group">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <ClipboardList className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-900 block">Survey Details</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs hover:border-primary transition-colors cursor-pointer text-center group">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-gray-900 block">Legal Info</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
