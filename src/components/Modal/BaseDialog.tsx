import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import * as React from 'react';

interface IBaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

type BaseDialogSubComponents = {
  Title: typeof Title;
  Button: typeof Button;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Title as="header" className="relative m-8 mb-4 h-[44px] text-center leading-tight">
      {children}
    </Dialog.Title>
  );
};

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={classNames('min-h-[48px] border-t px-2 py-1 active:bg-gray-200', rest.className)}>
      {children}
    </button>
  );
};

// TODO: Fix this hacky code of TypeScript
const BaseDialog: React.FC<IBaseDialogProps> & BaseDialogSubComponents = ({ isOpen, onClose, children }) => {
  // @ts-ignore
  const { Title } = Object.keys(BaseDialog).map((key) => {
    // @ts-ignore
    return React.Children.map(children, (child) => ((child as React.ReactElement)?.type.name === key ? child : null));
  });

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="m-5 flex w-full max-w-sm transform flex-col overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                {Title}

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

BaseDialog.Title = Title;
BaseDialog.Button = Button;

export default BaseDialog;
