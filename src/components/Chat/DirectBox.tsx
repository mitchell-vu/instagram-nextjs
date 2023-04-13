import { addDoc, collection, query, where } from 'firebase/firestore';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

import { ThreadList } from '@/components';
import NewThreadDialog from '@/components/Chat/NewThreadDialog';
import { auth, db } from '@/config/firebase';
import { Conversation as IConversation } from '@/types';
import DirectNull from './DirectThread/DirectNull';
import { useRouter } from 'next/router';

interface IDirectBoxProps {
  children?: React.ReactNode;
  directNull?: boolean;
}

const DirectBox: React.FunctionComponent<IDirectBoxProps> = ({ children, directNull }) => {
  const router = useRouter();

  const [loggedInUser] = useAuthState(auth);
  const [selectedRecipient, setSelectedRecipient] = React.useState<IConversation['id'] | null>(
    (router.query.threadId as IConversation['id']) ?? null,
  );
  const [isCreatingNewThread, setIsCreatingNewThread] = React.useState(false);

  const queryThreads = query(collection(db, 'threads'), where('users', 'array-contains', loggedInUser?.email));
  const [threadsSnapshot] = useCollection(queryThreads);

  const openNewThreadDialog = () => setIsCreatingNewThread(true);

  const createThreadHandler = async (email: string) => {
    // Check if thread already exists
    if (threadsSnapshot?.docs.find((thread) => (thread.data() as IConversation).users.includes(email))) return;

    await addDoc(collection(db, 'threads'), {
      users: [loggedInUser?.email, email],
    });
    setIsCreatingNewThread(false);
  };

  return (
    <>
      <div className="flex h-full w-full max-w-[935px] flex-row rounded border border-neutral-200 bg-white">
        <ThreadList
          selectedRecipient={selectedRecipient}
          onSelect={setSelectedRecipient}
          onCreateNewThread={openNewThreadDialog}
          threads={threadsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IConversation))}
        />
        <div className="flex h-full flex-1 flex-col">
          {directNull ? <DirectNull onCreateNewThread={openNewThreadDialog} /> : children}
        </div>
      </div>

      <NewThreadDialog
        isOpen={isCreatingNewThread}
        closeModal={() => setIsCreatingNewThread(false)}
        onCreateThread={createThreadHandler}
      />
    </>
  );
};

export default DirectBox;
