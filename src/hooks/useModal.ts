import { useState } from 'react';

export type ModalType = 'addOrg' | 'addAsset' | 'uploadDoc' | 'assignSurvey' | null;

export function useModal() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return {
    activeModal,
    openModal,
    closeModal
  };
}
