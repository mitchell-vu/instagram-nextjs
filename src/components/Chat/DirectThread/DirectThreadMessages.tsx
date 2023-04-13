import * as React from 'react';
import ThreadHeader from './ThreadHeader';
import Message from './Message';
import Input from './Input';
import { Conversation, IMessage } from '@/types';
import { useRecipient } from '@/hooks/useRecipient';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '@/config/firebase';
import { useRouter } from 'next/router';
import { generateQueryGetMessages } from '@/utils/getMessagesInConversation';
import { useCollection } from 'react-firebase-hooks/firestore';

interface IConversationProps {
  thread: Conversation;
}

const DirectThreadMessages: React.FC<IConversationProps> = ({ thread }) => {
  const { threadId } = useRouter().query;
  const [loggedInUser] = useAuthState(auth);
  const { recipient, recipientEmail } = useRecipient(thread.users);
  const threadsWrapperRef = React.useRef<HTMLDivElement>(null);

  const queryGetMessages = generateQueryGetMessages(threadId as Conversation['id']);
  const [messagesSnapshot] = useCollection(queryGetMessages);

  const [messages, setMessages] = React.useState<IMessage[]>([]);

  React.useEffect(() => {
    if (messagesSnapshot) {
      const messages = messagesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IMessage));
      setMessages(messages);
    }
  }, [messagesSnapshot]);

  const addMessageToDbAndUpdateLastSeen = async (message: string) => {
    // Update last seen in 'users' collection
    await setDoc(doc(db, 'users', loggedInUser?.email as string), { lastSeen: serverTimestamp() }, { merge: true }); // just update what is changed

    await addDoc(collection(db, 'messages'), {
      thread_id: threadId,
      sent_at: serverTimestamp(),
      text: message,
      user: loggedInUser?.email,
    });

    console.log(threadsWrapperRef.current, threadsWrapperRef.current?.scrollHeight);

    threadsWrapperRef.current?.scroll({ top: threadsWrapperRef.current.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <ThreadHeader recipient={recipient!} recipientEmail={recipientEmail} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div ref={threadsWrapperRef} className="p-5 pb-0">
            {/* <Message endSequence={false} isMyself={false} />
            <Message endSequence={true} isMyself={false} />
            <div className="mb-6 mt-3">
              <div className="text-center text-xs text-neutral-400">4:49 PM</div>
            </div>
            <Message endSequence={false} isMyself={true} />
            <Message endSequence={false} isMyself={true} />
            <Message endSequence={false} isMyself={false} />
            <Message endSequence={true} isMyself={false} /> */}

            {messages.map((message, index) => {
              const isMyself = message.user !== recipientEmail;
              const endSequence = messages[index + 1]?.user !== message.user;
              const sendUser = isMyself ? loggedInUser : recipient;

              return <Message key={message.id} {...{ isMyself, endSequence, message, sendUser }} />;
            })}
          </div>
        </div>

        <Input onSendMessage={addMessageToDbAndUpdateLastSeen} />
      </div>
    </>
  );
};

export default DirectThreadMessages;
