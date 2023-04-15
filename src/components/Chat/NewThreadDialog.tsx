import { XMarkSvg } from '@/assets/svg';
import { auth } from '@/config/firebase';
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import BaseModal from '../Modal/BaseModal';

interface INewThreadDialogProps {
  isOpen: boolean;
  closeModal: () => void;
  // eslint-disable-next-line no-unused-vars
  onCreateThread: (email: string) => void;
}

const NewThreadDialog: React.FC<INewThreadDialogProps> = ({ isOpen, closeModal, onCreateThread }) => {
  const [loggedInUser] = useAuthState(auth);
  const [recipientEmail, setRecipientEmail] = React.useState('');

  const createThreadHandler = () => {
    if (!recipientEmail) return;
    if (loggedInUser?.email === recipientEmail) return;
    onCreateThread(recipientEmail);
  };

  const leftButton = (
    <button
      onClick={createThreadHandler}
      disabled={!recipientEmail}
      className="relative z-10 float-right mx-4 flex h-full items-center justify-center p-2 text-sm text-sky-500 enabled:hover:text-sky-900 disabled:opacity-50"
    >
      Next
    </button>
  );

  const rightButton = (
    <button onClick={closeModal} className="relative z-10 float-left flex h-full items-center justify-center px-4">
      <XMarkSvg className="h-4 w-4" />
    </button>
  );

  return (
    <BaseModal isOpen={isOpen} onClose={closeModal} title="New message" leftBtn={leftButton} rightBtn={rightButton}>
      <div className="my-2 flex flex-row items-stretch">
        <div className="px-3 py-1 font-semibold">To: </div>
        <div className="grow px-2">
          <input
            type="text"
            className="w-full bg-transparent px-3 py-1 text-sm leading-8 outline-none"
            placeholder="Search..."
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
          />
        </div>
      </div>
    </BaseModal>
  );
};

export default NewThreadDialog;
