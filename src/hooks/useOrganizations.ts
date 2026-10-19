import { useState, useMemo } from 'react';
import { Organization } from '../types';
import { mockOrganizations } from '../utils/mockData';

export function useOrganizations() {
  const [organizations, setOrganizations] = useState<Organization[]>(mockOrganizations);
  const [activeTab, setActiveTab] = useState<'All' | 'Company' | 'Individual' | 'Active' | 'Inactive'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('Type');
  const [statusFilter, setStatusFilter] = useState('Status');

  const filteredOrganizations = useMemo(() => {
    return organizations.filter(org => {
      const matchesSearch =
        org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.contactPerson.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesTab = true;
      if (activeTab === 'Company') matchesTab = org.type === 'Company';
      if (activeTab === 'Individual') matchesTab = org.type === 'Individual';
      if (activeTab === 'Active') matchesTab = org.status === 'Active';
      if (activeTab === 'Inactive') matchesTab = org.status === 'Inactive';

      const matchesType = typeFilter === 'Type' || org.type === typeFilter;
      const matchesStatus = statusFilter === 'Status' || org.status === statusFilter;

      return matchesSearch && matchesTab && matchesType && matchesStatus;
    });
  }, [organizations, searchQuery, activeTab, typeFilter, statusFilter]);

  const addOrganization = (newOrg: Omit<Organization, 'id'>) => {
    const orgWithId: Organization = {
      ...newOrg,
      id: String(Date.now()),
      landParcels: 0,
      totalArea: 0,
    };
    setOrganizations(prev => [orgWithId, ...prev]);
  };

  return {
    organizations,
    filteredOrganizations,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    typeFilter,
    setTypeFilter,
    statusFilter,
    setStatusFilter,
    addOrganization
  };
}
