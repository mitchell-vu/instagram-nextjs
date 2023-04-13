import * as React from 'react';
import Header from './Header';
import Message from './Message';
import Input from './Input';
import { Conversation as IConversation, IMessage } from '@/types';
import { useRecipient } from '@/hooks/useRecipient';

interface IConversationProps {
  thread: IConversation;
  messages: IMessage[];
}

const DirectThreadMessages: React.FC<IConversationProps> = ({ thread }) => {
  const { recipient, recipientEmail } = useRecipient(thread.users);

  return (
    <>
      <Header recipient={recipient!} recipientEmail={recipientEmail} />
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

export default DirectThreadMessages;
