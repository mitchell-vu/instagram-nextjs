import * as React from 'react';
import BaseDialog from '../BaseDialog';

interface IDiscardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDiscard: () => void;
}

const DiscardDialog: React.FunctionComponent<IDiscardDialogProps> = ({ isOpen, onClose, onDiscard }) => {
  return (
    <BaseDialog isOpen={isOpen} onClose={onClose}>
      <BaseDialog.Title>
        <h2 className="text-xl">Discard Post?</h2>
        <p className="pt-2 text-sm text-gray-500">If you leave, your edits won't be saved.</p>
      </BaseDialog.Title>

      <div className="mt-4 flex shrink-0 flex-col items-stretch text-center text-sm leading-none">
        <BaseDialog.Button className="font-bold text-red-500" onClick={onDiscard}>
          Discard
        </BaseDialog.Button>
        <BaseDialog.Button onClick={onClose}>Cancel</BaseDialog.Button>
      </div>
    </BaseDialog>
  );
};

export default DiscardDialog;
