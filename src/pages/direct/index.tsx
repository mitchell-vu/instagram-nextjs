import { addDoc, collection, query, where } from 'firebase/firestore';
import Head from 'next/head';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

import { Layout, ThreadList } from '@/components';
import Conversation from '@/components/Chat/Feed/Conversation';
import DirectNull from '@/components/Chat/Feed/DirectNull';
import NewThreadDialog from '@/components/Chat/NewThreadDialog';
import { auth, db } from '@/config/firebase';
import { Conversation as IConversation } from '@/types';

interface IDirectProps {}

const Direct: React.FC<IDirectProps> = () => {
  const [loggedInUser] = useAuthState(auth);
  const [selectedRecipient, setSelectedRecipient] = React.useState<IConversation['id'] | null>(null);
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
    <Layout>
      <Head>
        <title>Instagram • Chats</title>
      </Head>

      <div className="flex h-full w-full max-w-4xl flex-row rounded border border-neutral-200 bg-white">
        <ThreadList
          selectedRecipient={selectedRecipient}
          onSelect={setSelectedRecipient}
          onCreateNewThread={openNewThreadDialog}
          threads={threadsSnapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IConversation))}
        />
        <div className="flex h-full flex-1 flex-col">
          {selectedRecipient === null ? <DirectNull onCreateNewThread={openNewThreadDialog} /> : <Conversation />}
        </div>
      </div>

      <NewThreadDialog
        isOpen={isCreatingNewThread}
        closeModal={() => setIsCreatingNewThread(false)}
        onCreateThread={createThreadHandler}
      />
    </Layout>
  );
};

export default Direct;
