import * as React from 'react';

import { Header, Input, Message, Sidebar } from '@/components';

interface IDirectProps {}

const Direct: React.FunctionComponent<IDirectProps> = (props) => {
  return (
    <div className="flex h-full w-full max-w-4xl flex-row rounded border border-neutral-200 bg-white">
      <Sidebar />
      <div className="flex h-full flex-1 flex-col">
        <Header />

        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="p-5 pb-0">
              <Message endSequence={false} isMyself={false} />
              <Message endSequence={true} isMyself={false} />
              <div className="mt-3 mb-6">
                <div className="text-center text-xs text-neutral-400">4:49 PM</div>
              </div>
              <Message endSequence={false} isMyself={true} />
              <Message endSequence={false} isMyself={true} />
              <Message endSequence={false} isMyself={false} />
              <Message endSequence={true} isMyself={false} />
            </div>
          </div>

          <Input />
        </div>
      </div>
    </div>
  );
};

export default Direct;
