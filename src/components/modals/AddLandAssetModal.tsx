import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { LandAsset, Organization } from '../../types';

interface AddLandAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (asset: Omit<LandAsset, 'id'>) => void;
  organizations: Organization[];
}

export const AddLandAssetModal: React.FC<AddLandAssetModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  organizations
}) => {
  const [owner, setOwner] = useState(organizations[0]?.name || 'Green Valley Estates');
  const [surveyNo, setSurveyNo] = useState('');
  const [village, setVillage] = useState('');
  const [mandal, setMandal] = useState('');
  const [district, setDistrict] = useState('Hyderabad');
  const [area, setArea] = useState('');
  const [landType, setLandType] = useState<LandAsset['landType']>('Agricultural');
  const [status, setStatus] = useState<LandAsset['status']>('Owned');
  const [latitude, setLatitude] = useState('17.4456');
  const [longitude, setLongitude] = useState('78.3489');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyNo || !village) return;
    onAdd({
      surveyNo,
      organizationOwner: owner,
      village,
      mandal,
      district,
      area: parseFloat(area) || 10.0,
      landType,
      status,
      gpsCoords: `${latitude}, ${longitude}`,
      coordinates: { latitude: parseFloat(latitude) || 17.4, longitude: parseFloat(longitude) || 78.3 }
    });
    setSurveyNo('');
    setVillage('');
    setMandal('');
    setArea('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Land Asset" maxWidth="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Organization/Owner *</label>
            <select
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              {organizations.map(org => (
                <option key={org.id} value={org.name}>{org.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Survey Number *</label>
            <input
              type="text"
              required
              value={surveyNo}
              onChange={(e) => setSurveyNo(e.target.value)}
              placeholder="Enter survey number"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Village *</label>
            <input
              type="text"
              required
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              placeholder="Enter village"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Mandal *</label>
            <input
              type="text"
              required
              value={mandal}
              onChange={(e) => setMandal(e.target.value)}
              placeholder="Enter mandal"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">District *</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="Hyderabad">Hyderabad</option>
              <option value="Rangareddy">Rangareddy</option>
              <option value="Medchal">Medchal</option>
              <option value="Sangareddy">Sangareddy</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Area (Acres) *</label>
            <input
              type="number"
              step="0.01"
              required
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter area"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Land Type *</label>
            <select
              value={landType}
              onChange={(e) => setLandType(e.target.value as LandAsset['landType'])}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="Agricultural">Agricultural</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
              <option value="Forest">Forest</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Status *</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as LandAsset['status'])}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="Owned">Owned</option>
              <option value="Leased">Leased</option>
              <option value="Under Dispute">Under Dispute</option>
              <option value="Sold">Sold</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-semibold text-gray-700">GPS Coordinates</label>
            <button
              type="button"
              onClick={() => alert('Marked current location on Map!')}
              className="text-xs text-primary font-semibold hover:underline"
            >
              Mark on Map
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Latitude"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <input
              type="text"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Longitude"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};
