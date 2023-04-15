import { XMarkSvg } from '@/assets/svg';
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';

interface IBaseModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  rightBtn?: React.ReactNode;
  leftBtn?: React.ReactNode;
}

const BaseModal: React.FC<IBaseModelProps> = ({ isOpen, onClose, title, rightBtn, leftBtn, children }) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" onClose={onClose}>
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
                  <div className="relative z-10 float-left h-full">{rightBtn}</div>
                  <h1 className="absolute flex h-full w-full items-center justify-center font-semibold">
                    <div>{title}</div>
                  </h1>
                  <div className="relative z-10 float-right h-full">{leftBtn}</div>
                </Dialog.Title>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BaseModal;
