import * as React from 'react';
import BaseModal from './BaseModal';
import { MediaSvg } from '@/assets/svg';

interface ICreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal: React.FunctionComponent<ICreatePostModalProps> = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Create new post">
      <div
        className="flex flex-col items-center justify-center p-6 text-center"
        style={{ minWidth: 348, minHeight: 391, maxWidth: 855, maxHeight: 898 }}
      >
        <MediaSvg height={77} />
        <div className="mt-4 text-xl">Drag photos and videos here</div>
        <button className="mt-4 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white outline-none hover:bg-sky-600 disabled:opacity-70">
          Select from computer
        </button>
      </div>
    </BaseModal>
  );
};

export default CreatePostModal;
