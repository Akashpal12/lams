import React, { useState } from 'react';
import { Search, Layers, Globe, MapPin, ZoomIn, ZoomOut, Navigation } from 'lucide-react';
import { LandAsset } from '../types';

interface MapPageProps {
  assets: LandAsset[];
  onSelectAsset: (asset: LandAsset) => void;
}

export const MapPage: React.FC<MapPageProps> = ({ assets, onSelectAsset }) => {
  const [mapType, setMapType] = useState('Map Type');
  const [searchLocation, setSearchLocation] = useState('');
  const [layers, setLayers] = useState({
    landParcels: true,
    orgBoundary: true,
    villageBoundary: false,
    satelliteView: false
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">GIS Map View</h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">View and manage land parcels on map</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 shadow-xs">
            <option>All Organizations</option>
          </select>
          <select
            value={mapType}
            onChange={(e) => setMapType(e.target.value)}
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 shadow-xs"
          >
            <option value="Map Type">Map Type</option>
            <option value="Satellite">Satellite</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[650px] flex">
        {/* Simulated Map Background with Polygons & Grid */}
        <div className="absolute inset-0 bg-[#0f172a] opacity-95 flex items-center justify-center overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Simulated GIS Polygon Overlays */}
          <div className="absolute top-24 left-32 w-64 h-48 bg-emerald-500/30 border-2 border-emerald-400 rounded-lg backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse cursor-pointer" onClick={() => onSelectAsset(assets[0])}>
            <span className="bg-emerald-900/80 px-2 py-1 rounded">Survey No. 123 (Owned)</span>
          </div>

          <div className="absolute top-48 right-48 w-56 h-40 bg-blue-500/30 border-2 border-blue-400 rounded-lg backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold shadow-lg cursor-pointer" onClick={() => onSelectAsset(assets[1])}>
            <span className="bg-blue-900/80 px-2 py-1 rounded">Survey No. 456 (Leased)</span>
          </div>

          <div className="absolute bottom-32 left-64 w-72 h-44 bg-amber-500/30 border-2 border-amber-400 rounded-lg backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold shadow-lg cursor-pointer" onClick={() => onSelectAsset(assets[3])}>
            <span className="bg-amber-900/80 px-2 py-1 rounded">Survey No. 101 (Dispute)</span>
          </div>

          <div className="absolute top-20 right-96 w-48 h-36 bg-red-500/30 border-2 border-red-400 rounded-lg backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold shadow-lg cursor-pointer" onClick={() => onSelectAsset(assets[6])}>
            <span className="bg-red-900/80 px-2 py-1 rounded">Survey No. 654 (Sold)</span>
          </div>

          {/* Map Marker Pin */}
          <div className="absolute top-36 left-48 text-red-500 animate-bounce">
            <MapPin className="w-8 h-8 drop-shadow-lg" />
          </div>
        </div>

        {/* Top search overlay */}
        <div className="absolute top-4 left-4 z-10 w-80">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Search location..."
              className="w-full pl-9 pr-4 py-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-primary/25"
            />
          </div>
        </div>

        {/* Right Layers Panel */}
        <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-200 w-56 space-y-3">
          <div className="flex items-center gap-2 font-bold text-xs text-gray-900 border-b border-gray-100 pb-2">
            <Layers className="w-4 h-4 text-primary" />
            <span>Layers</span>
          </div>
          <div className="space-y-2 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={layers.landParcels}
                onChange={(e) => setLayers({ ...layers, landParcels: e.target.checked })}
                className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
              />
              <span className="text-gray-700 font-medium">Land Parcels</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={layers.orgBoundary}
                onChange={(e) => setLayers({ ...layers, orgBoundary: e.target.checked })}
                className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
              />
              <span className="text-gray-700 font-medium">Organization Boundary</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={layers.villageBoundary}
                onChange={(e) => setLayers({ ...layers, villageBoundary: e.target.checked })}
                className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
              />
              <span className="text-gray-700 font-medium">Village Boundary</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={layers.satelliteView}
                onChange={(e) => setLayers({ ...layers, satelliteView: e.target.checked })}
                className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
              />
              <span className="text-gray-700 font-medium">Satellite View</span>
            </label>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <h4 className="text-[11px] font-bold text-gray-900 mb-2">Legend</h4>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-500 rounded-sm"></span>
                <span className="text-gray-600 font-medium">Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                <span className="text-gray-600 font-medium">Leased</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-500 rounded-sm"></span>
                <span className="text-gray-600 font-medium">Under Dispute</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
                <span className="text-gray-600 font-medium">Sold</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-right Zoom controls */}
        <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-1 bg-white rounded-lg shadow-lg border border-gray-200 p-1">
          <button className="p-2 hover:bg-gray-100 rounded text-gray-700"><ZoomIn className="w-4 h-4" /></button>
          <button className="p-2 hover:bg-gray-100 rounded text-gray-700"><ZoomOut className="w-4 h-4" /></button>
          <button className="p-2 hover:bg-gray-100 rounded text-gray-700"><Navigation className="w-4 h-4" /></button>
        </div>

        {/* Google watermark branding simulation */}
        <div className="absolute bottom-3 left-3 z-10 text-[10px] font-bold text-white/70 bg-black/40 px-2 py-0.5 rounded">
          Google
        </div>
      </div>
    </div>
  );
};
