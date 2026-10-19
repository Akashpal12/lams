import { Organization, LandAsset, Activity, TaskItem, NotificationItem } from '../types';

export const mockOrganizations: Organization[] = [
  {
    id: '1',
    name: 'Vibrant Infrastructure Pvt Ltd',
    type: 'Company',
    contactPerson: 'Amit Sharma',
    landParcels: 850,
    totalArea: 4520,
    status: 'Active',
    registrationNumber: 'U74999TG2019PTC134211',
    email: 'contact@vibrantinfra.com',
    phone: '+91 98765 43210',
    address: 'Banjara Hills, Road No. 12, Hyderabad'
  },
  {
    id: '2',
    name: 'Green Valley Estates',
    type: 'Company',
    contactPerson: 'Rahul Mehta',
    landParcels: 320,
    totalArea: 1850,
    status: 'Active',
    registrationNumber: 'U45200TG2021PTC145890',
    email: 'info@greenvalley.com',
    phone: '+91 98765 43211',
    address: 'Jubilee Hills, Hyderabad'
  },
  {
    id: '3',
    name: 'Sunrise Developers',
    type: 'Company',
    contactPerson: 'Neha Singh',
    landParcels: 210,
    totalArea: 1120,
    status: 'Active',
    registrationNumber: 'U70101TG2018PTC122334',
    email: 'support@sunrisedev.com',
    phone: '+91 98765 43212',
    address: 'Madhapur, HITEC City, Hyderabad'
  },
  {
    id: '4',
    name: 'Ravi Kumar',
    type: 'Individual',
    contactPerson: 'Ravi Kumar',
    landParcels: 12,
    totalArea: 50,
    status: 'Active',
    email: 'ravi.kumar@gmail.com',
    phone: '+91 98765 43213',
    address: 'Kondapur, Rangareddy'
  },
  {
    id: '5',
    name: 'Mahesh Properties',
    type: 'Company',
    contactPerson: 'Mahesh Verma',
    landParcels: 95,
    totalArea: 420,
    status: 'Active',
    registrationNumber: 'U45300TG2022PTC156789',
    email: 'mahesh@properties.com',
    phone: '+91 98765 43214',
    address: 'Secunderabad, Hyderabad'
  },
  {
    id: '6',
    name: 'Priya Land Holdings',
    type: 'Individual',
    contactPerson: 'Priya Sharma',
    landParcels: 28,
    totalArea: 180,
    status: 'Active',
    email: 'priya.holdings@gmail.com',
    phone: '+91 98765 43215',
    address: 'Gachibowli, Hyderabad'
  },
  {
    id: '7',
    name: 'KPL Developers',
    type: 'Company',
    contactPerson: 'Karan Patel',
    landParcels: 160,
    totalArea: 980,
    status: 'Inactive',
    registrationNumber: 'U45200TG2017PTC111222',
    email: 'kpl@developers.com',
    phone: '+91 98765 43216',
    address: 'Kukatpally, Hyderabad'
  },
  {
    id: '8',
    name: 'Sharma Family Trust',
    type: 'Individual',
    contactPerson: 'Suresh Sharma',
    landParcels: 18,
    totalArea: 75,
    status: 'Active',
    email: 'sharmatrust@gmail.com',
    phone: '+91 98765 43217',
    address: 'Shamshabad, Rangareddy'
  }
];

export const mockLandAssets: LandAsset[] = [
  {
    id: '1',
    surveyNo: '123',
    organizationOwner: 'Green Valley Estates',
    village: 'Kondapur',
    district: 'Hyderabad',
    area: 12.50,
    landType: 'Agricultural',
    status: 'Owned',
    mandal: 'Serilingampally',
    gpsCoords: '17.4456, 78.3489',
    coordinates: { latitude: 17.4456, longitude: 78.3489 },
    history: [
      { date: '12 Jan 2024', event: 'Title Deed verified & updated', user: 'Amit Sharma' },
      { date: '18 Aug 2023', event: 'Survey completed by GIS team', user: 'Ramesh Kumar' }
    ]
  },
  {
    id: '2',
    surveyNo: '456',
    organizationOwner: 'Sunrise Developers',
    village: 'Manikonda',
    district: 'Hyderabad',
    area: 8.75,
    landType: 'Agricultural',
    status: 'Leased',
    mandal: 'Gandipet',
    gpsCoords: '17.3982, 78.3752',
    coordinates: { latitude: 17.3982, longitude: 78.3752 }
  },
  {
    id: '3',
    surveyNo: '789',
    organizationOwner: 'Vibrant Infrastructure',
    village: 'Serilingampally',
    district: 'Hyderabad',
    area: 25.30,
    landType: 'Commercial',
    status: 'Owned',
    mandal: 'Serilingampally',
    gpsCoords: '17.4831, 78.3214',
    coordinates: { latitude: 17.4831, longitude: 78.3214 }
  },
  {
    id: '4',
    surveyNo: '101',
    organizationOwner: 'Ravi Kumar',
    village: 'Rangareddy',
    district: 'Rangareddy',
    area: 5.00,
    landType: 'Agricultural',
    status: 'Under Dispute',
    mandal: 'Shamshabad',
    gpsCoords: '17.2541, 78.4312',
    coordinates: { latitude: 17.2541, longitude: 78.4312 }
  },
  {
    id: '5',
    surveyNo: '202',
    organizationOwner: 'Mahesh Properties',
    village: 'Chevella',
    district: 'Rangareddy',
    area: 15.20,
    landType: 'Agricultural',
    status: 'Owned',
    mandal: 'Chevella',
    gpsCoords: '17.2912, 78.1324',
    coordinates: { latitude: 17.2912, longitude: 78.1324 }
  },
  {
    id: '6',
    surveyNo: '301',
    organizationOwner: 'Priya Land Holdings',
    village: 'Shankarpally',
    district: 'Hyderabad',
    area: 3.80,
    landType: 'Residential',
    status: 'Owned',
    mandal: 'Shankarpally',
    gpsCoords: '17.5210, 78.1250',
    coordinates: { latitude: 17.5210, longitude: 78.1250 }
  },
  {
    id: '7',
    surveyNo: '654',
    organizationOwner: 'KPL Developers',
    village: 'Medchal',
    district: 'Medchal',
    area: 10.00,
    landType: 'Commercial',
    status: 'Leased',
    mandal: 'Medchal',
    gpsCoords: '17.6321, 78.4891',
    coordinates: { latitude: 17.6321, longitude: 78.4891 }
  },
  {
    id: '8',
    surveyNo: '876',
    organizationOwner: 'Sharma Family Trust',
    village: 'Moinabad',
    district: 'Rangareddy',
    area: 7.50,
    landType: 'Agricultural',
    status: 'Owned',
    mandal: 'Moinabad',
    gpsCoords: '17.3821, 78.2145',
    coordinates: { latitude: 17.3821, longitude: 78.2145 }
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'land_added',
    title: 'New land parcel added',
    description: 'Survey No. 123',
    timeAgo: '2 min ago'
  },
  {
    id: '2',
    type: 'document_uploaded',
    title: 'Document uploaded',
    description: 'Title Deed',
    timeAgo: '15 min ago'
  },
  {
    id: '3',
    type: 'user_created',
    title: 'New user created',
    description: 'Ramesh Kumar',
    timeAgo: '1 hour ago'
  },
  {
    id: '4',
    type: 'legal_updated',
    title: 'Legal case updated',
    description: 'Case No. LC/2024/56',
    timeAgo: '2 hours ago'
  }
];

export const mockTasks: TaskItem[] = [
  {
    id: '1',
    title: 'Survey pending',
    caseNo: 'Survey No. 456',
    dueDate: '5 Due today',
    statusColor: 'orange'
  },
  {
    id: '2',
    title: 'Document expiry',
    caseNo: 'Tax receipt (BN-788)',
    dueDate: '2 Tomorrow',
    statusColor: 'yellow'
  },
  {
    id: '3',
    title: 'Legal hearing',
    caseNo: 'Case No. LC/2024/12',
    dueDate: '12 15 Oct 2024',
    statusColor: 'blue'
  }
];

export const mockNotifications: NotificationItem[] = [
  {
    id: '1',
    category: 'Survey',
    title: 'New land parcel added',
    subtitle: 'Survey No. 123 - Green Valley Estates',
    timeAgo: '2 min ago',
    unread: true
  },
  {
    id: '2',
    category: 'Document',
    title: 'Document uploaded',
    subtitle: 'Title Deed - Survey No. 123',
    timeAgo: '15 min ago',
    unread: true
  },
  {
    id: '3',
    category: 'System',
    title: 'New user created',
    subtitle: 'Ramesh Kumar',
    timeAgo: '1 hour ago',
    unread: false
  },
  {
    id: '4',
    category: 'Legal',
    title: 'Legal case updated',
    subtitle: 'Case No. LC/2024/56',
    timeAgo: '2 hours ago',
    unread: false
  },
  {
    id: '5',
    category: 'Survey',
    title: 'Survey pending',
    subtitle: 'Survey No. 456 - Due today',
    timeAgo: '5 hours ago',
    unread: false
  }
];
