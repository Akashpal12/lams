import { useState, useMemo } from 'react';
import { LandAsset } from '../types';
import { mockLandAssets } from '../utils/mockData';

export function useLandAssets() {
  const [assets, setAssets] = useState<LandAsset[]>(mockLandAssets);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrganizationFilter, setSelectedOrganizationFilter] = useState('All Organizations');
  const [selectedLandTypeFilter, setSelectedLandTypeFilter] = useState('Land Type');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('Status');
  const [selectedAssetForDetails, setSelectedAssetForDetails] = useState<LandAsset | null>(null);

  const filteredAssets = useMemo(() => {
    return assets.filter(asset => {
      const matchesSearch =
        asset.surveyNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.organizationOwner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.village.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.district.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesOrg = selectedOrganizationFilter === 'All Organizations' || asset.organizationOwner === selectedOrganizationFilter;
      const matchesType = selectedLandTypeFilter === 'Land Type' || asset.landType === selectedLandTypeFilter;
      const matchesStatus = selectedStatusFilter === 'Status' || asset.status === selectedStatusFilter;

      return matchesSearch && matchesOrg && matchesType && matchesStatus;
    });
  }, [assets, searchQuery, selectedOrganizationFilter, selectedLandTypeFilter, selectedStatusFilter]);

  const addAsset = (newAsset: Omit<LandAsset, 'id'>) => {
    const assetWithId: LandAsset = {
      ...newAsset,
      id: String(Date.now()),
      history: [{ date: new Date().toLocaleDateString(), event: 'Parcel registered', user: 'Super Admin' }]
    };
    setAssets(prev => [assetWithId, ...prev]);
  };

  return {
    assets,
    filteredAssets,
    searchQuery,
    setSearchQuery,
    selectedOrganizationFilter,
    setSelectedOrganizationFilter,
    selectedLandTypeFilter,
    setSelectedLandTypeFilter,
    selectedStatusFilter,
    setSelectedStatusFilter,
    selectedAssetForDetails,
    setSelectedAssetForDetails,
    addAsset
  };
}
