import { XMarkSvg } from '@/assets/svg';
import { auth } from '@/config/firebase';
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

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

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="m-5 flex w-full max-w-md transform flex-col overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="relative h-12 border-b font-medium leading-6 text-gray-900">
                  <button
                    onClick={closeModal}
                    className="relative z-10 float-left flex h-full items-center justify-center px-4"
                  >
                    <XMarkSvg className="h-4 w-4" />
                  </button>
                  <h1 className="absolute flex h-full w-full items-center justify-center">New message</h1>
                  <button
                    onClick={createThreadHandler}
                    disabled={!recipientEmail}
                    className="relative z-10 float-right mx-4 flex h-full items-center justify-center p-2 text-sm text-sky-500 enabled:hover:text-sky-900 disabled:opacity-50"
                  >
                    Next
                  </button>
                </Dialog.Title>

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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NewThreadDialog;
