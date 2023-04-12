import * as React from 'react';
import Header from './Header';
import Message from './Message';
import Input from './Input';

interface IConversationProps {}

const Conversation: React.FunctionComponent<IConversationProps> = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="p-5 pb-0">
            <Message endSequence={false} isMyself={false} />
            <Message endSequence={true} isMyself={false} />
            <div className="mb-6 mt-3">
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
    </>
  );
};

export default Conversation;
