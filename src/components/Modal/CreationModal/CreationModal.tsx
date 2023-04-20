import * as React from 'react';
import BaseModal from '../BaseModal';

import DiscardDialog from './DiscardDialog';
import MediaSelectPage from './MediaSelectPage';
import MediaCropPage from './MediaCropPage';
import MediaComposePage from './MediaComposePage';
import { ArrowLeftSvg } from '@/assets/svg';
import classNames from 'classnames';

interface ICreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreationModal: React.FunctionComponent<ICreationModalProps> = ({ isOpen, onClose }) => {
  const [isDiscardDialogOpen, setIsDiscardDialogOpen] = React.useState(false);
  const [mediaStep, setMediaStep] = React.useState<'select' | 'crop' | 'compose'>('select');
  const [selectedMedia, setSelectedMedia] = React.useState<any | null>(null);

  const closeModalHandler = () => {
    setIsDiscardDialogOpen(true);
  };

  const onDiscard = () => {
    setIsDiscardDialogOpen(false);
    onClose();
  };

  const modalTitle = React.useMemo(() => {
    switch (mediaStep) {
      case 'select':
        return 'Create new post';
      case 'crop':
        return 'Crop';
      case 'compose':
        return 'Create new post';
    }
  }, [mediaStep]);

  const rightButton = React.useMemo(() => {
    switch (mediaStep) {
      case 'select':
        return null;
      case 'crop':
        return (
          <button
            onClick={() => {
              setMediaStep('select');
              setSelectedMedia(null);
            }}
            className="ml-2 flex h-full items-center justify-center p-2 active:opacity-50"
          >
            <ArrowLeftSvg height={24} width={24} />
          </button>
        );
      case 'compose':
        return (
          <button
            onClick={() => setMediaStep('crop')}
            className="ml-2 flex h-full items-center justify-center p-2 active:opacity-50"
          >
            <ArrowLeftSvg height={24} width={24} />
          </button>
        );
    }
  }, [mediaStep]);

  const leftButton = React.useMemo(() => {
    switch (mediaStep) {
      case 'select':
        return null;
      case 'crop':
        return (
          <button
            onClick={() => setMediaStep('compose')}
            className="flex h-full items-center justify-center p-4 text-sm font-semibold text-sky-500 hover:text-sky-900 active:opacity-50"
          >
            Next
          </button>
        );
      case 'compose':
        return (
          <button
            onClick={() => {
              onClose();
              setMediaStep('select');
              setSelectedMedia(null);
            }}
            className="flex h-full items-center justify-center p-4 text-sm font-semibold text-sky-500 hover:text-sky-900 active:opacity-50"
          >
            Share
          </button>
        );
    }
  }, [mediaStep]);

  return (
    <>
      <BaseModal
        isOpen={isOpen}
        onClose={closeModalHandler}
        title={modalTitle}
        rightBtn={rightButton}
        leftBtn={leftButton}
        className={classNames({ '!w-[800px] max-w-none': mediaStep === 'compose' })}
      >
        {mediaStep === 'select' && <MediaSelectPage setMediaStep={setMediaStep} setSelectedMedia={setSelectedMedia} />}
        {mediaStep === 'crop' && <MediaCropPage selectedMedia={selectedMedia} />}
        {mediaStep === 'compose' && <MediaComposePage selectedMedia={selectedMedia} />}
      </BaseModal>

      <DiscardDialog isOpen={isDiscardDialogOpen} onClose={() => setIsDiscardDialogOpen(false)} onDiscard={onDiscard} />
    </>
  );
};

export default CreationModal;
