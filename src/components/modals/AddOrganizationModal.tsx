import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Organization } from '../../types';
import { Upload, Check, ChevronRight, MapPin, Building2, FileText, Settings, ShieldCheck } from 'lucide-react';

interface AddOrganizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (org: Omit<Organization, 'id'>) => void;
}

export const AddOrganizationModal: React.FC<AddOrganizationModalProps> = ({
  isOpen,
  onClose,
  onAdd
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Form state across 7 steps
  const [formData, setFormData] = useState({
    orgType: 'Company' as 'Company' | 'Individual',
    name: 'GreenField Agro Pvt. Ltd.',
    regNumber: 'GFAPL12345',
    panNumber: 'AAAC01234H',
    contactPerson: 'Rahul Kumar',
    email: 'rahul@greenfield.com',
    mobile: '+91 9676543210',
    landline: '040-2345678',
    addressLine1: 'Plot No. 45, HITEC City',
    addressLine2: 'Madhapur',
    state: 'Telangana',
    district: 'Hyderabad',
    city: 'Hyderabad',
    pincode: '500081',
    category: 'Agriculture',
    website: 'https://greenfield.com',
    description: 'Leading agro company focused on sustainable farming.',
    latitude: '17.4456',
    longitude: '78.3489',
    activeOrg: true,
    allowUsers: true,
    allowLandAssets: true,
    allowGis: true,
    allowDocuments: true,
    allowReports: true,
    defaultRole: 'Company Admin',
    dataVisibility: 'Only Organization Data'
  });

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Final submit
      onAdd({
        name: formData.name,
        type: formData.orgType,
        contactPerson: formData.contactPerson,
        landParcels: 12,
        totalArea: 450,
        status: 'Active',
        registrationNumber: formData.regNumber,
        email: formData.email,
        phone: formData.mobile,
        address: `${formData.addressLine1}, ${formData.city}, ${formData.state}`
      });
      setIsSuccess(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setCurrentStep(1);
    onClose();
  };

  const steps = [
    { num: 1, label: 'Basic Info' },
    { num: 2, label: 'Contact' },
    { num: 3, label: 'Additional' },
    { num: 4, label: 'Location' },
    { num: 5, label: 'Documents' },
    { num: 6, label: 'Access' },
    { num: 7, label: 'Review' },
  ];

  if (isSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleResetAndClose} title="Add Organization" maxWidth="max-w-xl">
        <div className="py-10 text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <Check className="w-10 h-10 stroke-[3]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Organization Created Successfully</h3>
            <p className="text-xs text-gray-500 mt-1">{formData.name} has been created successfully.</p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-4">
            <Button variant="primary" onClick={handleResetAndClose}>
              View Organization
            </Button>
            <Button variant="outline" onClick={() => { setIsSuccess(false); setCurrentStep(1); }}>
              Add Another Organization +
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleResetAndClose} title="Add Organization" maxWidth="max-w-4xl">
      <div className="space-y-6">
        {/* Step Wizard Header Tracker */}
        <div className="border-b border-gray-100 pb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-gray-900">Register a new company or individual account</h4>
            <span className="text-xs font-semibold text-gray-500">Step {currentStep} of 7</span>
          </div>

          {/* Stepper circles */}
          <div className="flex items-center justify-between relative px-4">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            {steps.map(s => {
              const isCompleted = currentStep > s.num;
              const isCurrent = currentStep === s.num;
              return (
                <div key={s.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isCompleted
                        ? 'bg-primary text-white shadow-md'
                        : isCurrent
                        ? 'bg-primary text-white ring-4 ring-primary/20 shadow-md'
                        : 'bg-white text-gray-500 border border-gray-300'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span className={`text-[10px] font-semibold mt-1.5 ${isCurrent ? 'text-primary' : 'text-gray-500'}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="py-2">
          {/* STEP 1: Basic Information */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Basic Information</h3>
                  <p className="text-xs text-gray-500">Enter the basic details of the organization.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Organization Type *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, orgType: 'Company' })}
                      className={`p-3 rounded-xl border text-left transition-all ${formData.orgType === 'Company' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-gray-200 hover:bg-gray-50'}`}
                    >
                      <Building2 className={`w-5 h-5 mb-1 ${formData.orgType === 'Company' ? 'text-primary' : 'text-gray-500'}`} />
                      <div className="text-xs font-bold text-gray-900">Company</div>
                      <div className="text-[10px] text-gray-500">Registered business entity</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, orgType: 'Individual' })}
                      className={`p-3 rounded-xl border text-left transition-all ${formData.orgType === 'Individual' ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-gray-200 hover:bg-gray-50'}`}
                    >
                      <Check className={`w-5 h-5 mb-1 ${formData.orgType === 'Individual' ? 'text-primary' : 'text-gray-500'}`} />
                      <div className="text-xs font-bold text-gray-900">Individual</div>
                      <div className="text-[10px] text-gray-500">Individual landowner</div>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Organization Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Registration Number *</label>
                    <input
                      type="text"
                      value={formData.regNumber}
                      onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">PAN Number (Optional)</label>
                  <input
                    type="text"
                    value={formData.panNumber}
                    onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Required for tax and official documentation.</p>
                </div>
              </div>

              {/* Tips sidebar & Logo Upload */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Organization Logo <span className="text-gray-400">(Optional)</span></label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer bg-gray-50/50">
                    <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-xs font-bold text-gray-800">Drag and drop your logo here</p>
                    <p className="text-[10px] text-primary font-semibold mt-1">or click to browse</p>
                    <p className="text-[9px] text-gray-400 mt-2">Supported formats: PNG, JPG, JPEG (Max 2 MB)</p>
                  </div>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-xs space-y-2">
                  <h5 className="font-bold text-emerald-900 flex items-center gap-1.5">
                    💡 Tips
                  </h5>
                  <ul className="space-y-1.5 text-emerald-800/80 text-[11px]">
                    <li>• Use the official registered name.</li>
                    <li>• Registration number and PAN help in verification.</li>
                    <li>• You can upload a logo now or later.</li>
                    <li>• All fields marked with * are required.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Contact Details */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Contact Details</h3>
                  <p className="text-xs text-gray-500">Enter contact and address information.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Person *</label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number *</label>
                    <input
                      type="text"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Landline Number (Optional)</label>
                    <input
                      type="text"
                      value={formData.landline}
                      onChange={(e) => setFormData({ ...formData, landline: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3">
                  <h4 className="text-xs font-bold text-gray-900">Address</h4>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Address Line 1 *</label>
                    <input
                      type="text"
                      value={formData.addressLine1}
                      onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Address Line 2 (Optional)</label>
                    <input
                      type="text"
                      value={formData.addressLine2}
                      onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">State *</label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none"
                      >
                        <option value="Telangana">Telangana</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">District *</label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white focus:outline-none"
                      >
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Rangareddy">Rangareddy</option>
                        <option value="Medchal">Medchal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">City / Tehsil *</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Pincode *</label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Tips */}
              <div>
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-xs space-y-2">
                  <h5 className="font-bold text-emerald-900 flex items-center gap-1.5">
                    💡 Address Tips
                  </h5>
                  <ul className="space-y-1.5 text-emerald-800/80 text-[11px]">
                    <li>• Enter accurate contact information.</li>
                    <li>• Use a valid email for notifications.</li>
                    <li>• Complete address helps in location mapping.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Additional Information */}
          {currentStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Additional Information</h3>
                  <p className="text-xs text-gray-500">Add more details about the organization.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Organization Category (Optional)</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white"
                    >
                      <option value="Agriculture">Agriculture</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Infrastructure">Infrastructure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Website (Optional)</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Description (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs resize-none"
                  ></textarea>
                </div>
              </div>

              <div>
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-xs space-y-2">
                  <h5 className="font-bold text-emerald-900 flex items-center gap-1.5">💡 Tips</h5>
                  <ul className="space-y-1.5 text-emerald-800/80 text-[11px]">
                    <li>• Select the correct category.</li>
                    <li>• Website and description help in better identification.</li>
                    <li>• Location details are required for mapping and analytics.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Location */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-xs text-gray-500">Set the location of the organization.</p>
              </div>

              <div className="relative bg-gray-900 rounded-xl overflow-hidden h-72 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0f172a] opacity-90 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-10 h-10 text-red-500 mx-auto animate-bounce mb-2" />
                    <span className="text-xs bg-black/60 text-white px-3 py-1 rounded-full">Pinpoint Location on Map</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Latitude</label>
                  <input
                    type="text"
                    value={formData.latitude}
                    onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Longitude</label>
                  <input
                    type="text"
                    value={formData.longitude}
                    onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Documents */}
          {currentStep === 5 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Documents</h3>
                  <p className="text-xs text-gray-500">Upload required documents of the organization.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="text-xs font-bold text-gray-900">Registration Certificate *</h4>
                        <p className="text-[10px] text-gray-500">Upload PDF (Max 5 MB)</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Upload</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="text-xs font-bold text-gray-900">PAN Card <span className="text-gray-400">(Optional)</span></h4>
                        <p className="text-[10px] text-gray-500">Upload PDF or image</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Upload</Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="text-xs font-bold text-gray-900">Address Proof <span className="text-gray-400">(Optional)</span></h4>
                        <p className="text-[10px] text-gray-500">Upload PDF or image</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Upload</Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-xs space-y-2">
                  <h5 className="font-bold text-emerald-900 flex items-center gap-1.5">💡 Document Tips</h5>
                  <ul className="space-y-1.5 text-emerald-800/80 text-[11px]">
                    <li>• Upload clear and readable documents.</li>
                    <li>• Accepted formats: PDF, JPG, PNG.</li>
                    <li>• Maximum file size: 5 MB per document.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Access & Settings */}
          {currentStep === 6 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Access & Settings</h3>
                  <p className="text-xs text-gray-500">Configure default settings for this organization.</p>
                </div>

                <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Active Organization</h4>
                      <p className="text-[10px] text-gray-500">Organization will be active after creation</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Allow Users</h4>
                      <p className="text-[10px] text-gray-500">Enable user assignment</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Allow Land Assets</h4>
                      <p className="text-[10px] text-gray-500">Allow land asset management</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">Allow GIS & Maps</h4>
                      <p className="text-[10px] text-gray-500">Enable map and location features</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-primary" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Default User Role</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white">
                      <option>Company Admin</option>
                      <option>Editor</option>
                      <option>Viewer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Data Visibility</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white">
                      <option>Only Organization Data</option>
                      <option>Global Data</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-xs space-y-2">
                  <h5 className="font-bold text-emerald-900 flex items-center gap-1.5">⚙️ Settings Tips</h5>
                  <p className="text-[11px] text-emerald-800/80">These settings control feature access for the organization.</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: Review Details */}
          {currentStep === 7 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Review Details</h3>
                  <p className="text-xs text-gray-500">Please review all details before creating.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Organization Name</span>
                    <span className="font-bold text-gray-900">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Type</span>
                    <span className="font-bold text-gray-900">{formData.orgType}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Contact Person</span>
                    <span className="font-bold text-gray-900">{formData.contactPerson}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Email & Mobile</span>
                    <span className="font-bold text-gray-900">{formData.email} | {formData.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location</span>
                    <span className="font-bold text-gray-900">{formData.city}, {formData.state}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-xs space-y-2">
                  <h5 className="font-bold text-emerald-900 flex items-center gap-1.5">🛡️ Check Before Submit</h5>
                  <ul className="space-y-1.5 text-emerald-800/80 text-[11px]">
                    <li>• Verify all information is correct.</li>
                    <li>• You can go back and edit any section.</li>
                    <li>• Click 'Create Organization' to complete the process.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button type="button" variant="primary" onClick={handleNext}>
            {currentStep === 7 ? 'Create Organization' : 'Save & Continue'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
