export interface User {
  id: string;
  name: string;
  userId: string;
  role: string;
  email: string;
}

export type NavTab =
  | 'dashboard'
  | 'organizations'
  | 'users'
  | 'land-assets'
  | 'gis-map'
  | 'documents'
  | 'litigation'
  | 'survey-ops'
  | 'encroachment'
  | 'reports'
  | 'notifications'
  | 'settings';

export interface Organization {
  id: string;
  name: string;
  type: 'Company' | 'Individual';
  contactPerson: string;
  landParcels: number;
  totalArea: number; // in Acres
  status: 'Active' | 'Inactive';
  registrationNumber?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface LandAsset {
  id: string;
  surveyNo: string;
  organizationOwner: string;
  village: string;
  district: string;
  area: number; // Acres
  landType: 'Agricultural' | 'Commercial' | 'Residential' | 'Forest' | 'Industrial';
  status: 'Owned' | 'Leased' | 'Under Dispute' | 'Sold';
  mandal?: string;
  coordinates?: { latitude: number; longitude: number };
  gpsCoords?: string;
  history?: { date: string; event: string; user: string }[];
}

export interface Activity {
  id: string;
  type: 'land_added' | 'document_uploaded' | 'user_created' | 'legal_updated';
  title: string;
  description: string;
  timeAgo: string;
}

export interface TaskItem {
  id: string;
  title: string;
  caseNo: string;
  dueDate: string;
  statusColor: 'orange' | 'yellow' | 'blue';
}

export interface NotificationItem {
  id: string;
  category: 'System' | 'Survey' | 'Legal' | 'Document';
  title: string;
  subtitle: string;
  timeAgo: string;
  unread: boolean;
}
