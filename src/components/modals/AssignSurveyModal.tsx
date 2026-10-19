import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { LandAsset } from '../../types';

interface AssignSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  assets: LandAsset[];
}

export const AssignSurveyModal: React.FC<AssignSurveyModalProps> = ({
  isOpen,
  onClose,
  assets
}) => {
  const [selectedAsset, setSelectedAsset] = useState(assets[0]?.surveyNo || '');
  const [fieldOfficer, setFieldOfficer] = useState('Ramesh Kumar');
  const [surveyType, setSurveyType] = useState('Boundary Verification');
  const [priority, setPriority] = useState('Medium');
  const [scheduledDate, setScheduledDate] = useState('2024-10-15');
  const [dueDate, setDueDate] = useState('2024-10-20');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Survey assigned successfully!');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Assign Survey" maxWidth="max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Land Parcel *</label>
            <select
              value={selectedAsset}
              onChange={(e) => setSelectedAsset(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              {assets.map(asset => (
                <option key={asset.id} value={asset.surveyNo}>Survey No. {asset.surveyNo}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Field Officer *</label>
            <select
              value={fieldOfficer}
              onChange={(e) => setFieldOfficer(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="Ramesh Kumar">Ramesh Kumar</option>
              <option value="Suresh Reddy">Suresh Reddy</option>
              <option value="Anitha Rao">Anitha Rao</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Survey Type *</label>
            <select
              value={surveyType}
              onChange={(e) => setSurveyType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="Boundary Verification">Boundary Verification</option>
              <option value="Topographical Survey">Topographical Survey</option>
              <option value="Encroachment Inspection">Encroachment Inspection</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Priority *</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Scheduled Date *</label>
            <input
              type="date"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Due Date *</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Instructions</label>
          <textarea
            rows={2}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter instructions"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          ></textarea>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Assign
          </Button>
        </div>
      </form>
    </Modal>
  );
};
