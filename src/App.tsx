import React, { useState } from 'react';
import { NavTab, LandAsset } from './types';
import { useAuth } from './hooks/useAuth';
import { useOrganizations } from './hooks/useOrganizations';
import { useLandAssets } from './hooks/useLandAssets';
import { useModal } from './hooks/useModal';
import { mockActivities, mockTasks, mockNotifications } from './utils/mockData';

import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import { LandAssetsPage } from './pages/LandAssetsPage';
import { MapPage } from './pages/MapPage';
import { LandDetailsPage } from './pages/LandDetailsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { GenericPlaceholderPage } from './pages/GenericPlaceholderPage';

import { AppLayout } from './components/layout/AppLayout';
import { AddOrganizationModal } from './components/modals/AddOrganizationModal';
import { AddLandAssetModal } from './components/modals/AddLandAssetModal';
import { UploadDocumentModal } from './components/modals/UploadDocumentModal';
import { AssignSurveyModal } from './components/modals/AssignSurveyModal';

export function App() {
  const { isAuthenticated, user, login, logout } = useAuth();
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [selectedAssetForDetails, setSelectedAssetForDetails] = useState<LandAsset | null>(null);

  const {
    organizations,
    filteredOrganizations,
    activeTab: orgActiveTab,
    setActiveTab: setOrgActiveTab,
    searchQuery: orgSearchQuery,
    setSearchQuery: setOrgSearchQuery,
    typeFilter: orgTypeFilter,
    setTypeFilter: setOrgTypeFilter,
    statusFilter: orgStatusFilter,
    setStatusFilter: setOrgStatusFilter,
    addOrganization
  } = useOrganizations();

  const {
    assets,
    filteredAssets,
    searchQuery: assetSearchQuery,
    setSearchQuery: setAssetSearchQuery,
    selectedOrganizationFilter: assetOrgFilter,
    setSelectedOrganizationFilter: setAssetOrgFilter,
    selectedLandTypeFilter: assetTypeFilter,
    setSelectedLandTypeFilter: setAssetTypeFilter,
    selectedStatusFilter: assetStatusFilter,
    setSelectedStatusFilter: setAssetStatusFilter,
    addAsset
  } = useLandAssets();

  const { activeModal, openModal, closeModal } = useModal();

  if (!isAuthenticated) {
    return <LoginPage onLogin={login} />;
  }

  const handleSelectAsset = (asset: LandAsset) => {
    setSelectedAssetForDetails(asset);
  };

  const renderContent = () => {
    if (selectedAssetForDetails) {
      return (
        <LandDetailsPage
          asset={selectedAssetForDetails}
          onBack={() => setSelectedAssetForDetails(null)}
          onOpenUploadModal={() => openModal('uploadDoc')}
          onOpenSurveyModal={() => openModal('assignSurvey')}
          onViewOnMap={() => {
            setSelectedAssetForDetails(null);
            setCurrentTab('gis-map');
          }}
        />
      );
    }

    switch (currentTab) {
      case 'dashboard':
        return (
          <DashboardPage
            activities={mockActivities}
            tasks={mockTasks}
            onNavigateToAssets={() => setCurrentTab('land-assets')}
            onNavigateToOrganizations={() => setCurrentTab('organizations')}
          />
        );
      case 'organizations':
        return (
          <OrganizationsPage
            organizations={organizations}
            filteredOrganizations={filteredOrganizations}
            activeTab={orgActiveTab}
            onTabChange={setOrgActiveTab}
            searchQuery={orgSearchQuery}
            onSearchChange={setOrgSearchQuery}
            typeFilter={orgTypeFilter}
            onTypeFilterChange={setOrgTypeFilter}
            statusFilter={orgStatusFilter}
            onStatusFilterChange={setOrgStatusFilter}
            onOpenAddModal={() => openModal('addOrg')}
          />
        );
      case 'land-assets':
        return (
          <LandAssetsPage
            assets={filteredAssets}
            searchQuery={assetSearchQuery}
            onSearchChange={setAssetSearchQuery}
            orgFilter={assetOrgFilter}
            onOrgFilterChange={setAssetOrgFilter}
            typeFilter={assetTypeFilter}
            onTypeFilterChange={setAssetTypeFilter}
            statusFilter={assetStatusFilter}
            onStatusFilterChange={setAssetStatusFilter}
            onOpenAddModal={() => openModal('addAsset')}
            onSelectAsset={handleSelectAsset}
          />
        );
      case 'gis-map':
        return (
          <MapPage
            assets={assets}
            onSelectAsset={handleSelectAsset}
          />
        );
      case 'notifications':
        return <NotificationsPage notifications={mockNotifications} />;
      case 'users':
        return <GenericPlaceholderPage title="Users & Roles" />;
      case 'documents':
        return <GenericPlaceholderPage title="Documents Management" />;
      case 'litigation':
        return <GenericPlaceholderPage title="Litigation & Legal Cases" />;
      case 'survey-ops':
        return <GenericPlaceholderPage title="Survey & Field Operations" />;
      case 'encroachment':
        return <GenericPlaceholderPage title="Encroachment Monitoring" />;
      case 'reports':
        return <GenericPlaceholderPage title="Reports & Analytics" />;
      case 'settings':
        return <GenericPlaceholderPage title="System Settings" />;
      default:
        return <DashboardPage activities={mockActivities} tasks={mockTasks} onNavigateToAssets={() => setCurrentTab('land-assets')} onNavigateToOrganizations={() => setCurrentTab('organizations')} />;
    }
  };

  return (
    <>
      <AppLayout
        currentTab={currentTab}
        onTabChange={(tab) => {
          setSelectedAssetForDetails(null);
          setCurrentTab(tab);
        }}
        user={user}
        searchQuery={assetSearchQuery}
        onSearchChange={setAssetSearchQuery}
        onNotificationClick={() => setCurrentTab('notifications')}
      >
        {renderContent()}
      </AppLayout>

      {/* Modals */}
      <AddOrganizationModal
        isOpen={activeModal === 'addOrg'}
        onClose={closeModal}
        onAdd={addOrganization}
      />
      <AddLandAssetModal
        isOpen={activeModal === 'addAsset'}
        onClose={closeModal}
        onAdd={addAsset}
        organizations={organizations}
      />
      <UploadDocumentModal
        isOpen={activeModal === 'uploadDoc'}
        onClose={closeModal}
        assets={assets}
      />
      <AssignSurveyModal
        isOpen={activeModal === 'assignSurvey'}
        onClose={closeModal}
        assets={assets}
      />
    </>
  );
}

export default App;
