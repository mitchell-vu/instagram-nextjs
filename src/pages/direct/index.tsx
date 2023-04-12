import * as React from 'react';

import { Layout, Sidebar } from '@/components';
import Head from 'next/head';
import Conversation from '@/components/Chat/Feed/Conversation';
import DirectNull from '@/components/Chat/Feed/DirectNull';

interface IDirectProps {}

const Direct: React.FC<IDirectProps> = () => {
  const [selectedRecipient, setSelectedRecipient] = React.useState<number | null>(null);

  return (
    <Layout>
      <Head>
        <title>Instagram • Chats</title>
      </Head>

      <div className="flex h-full w-full max-w-4xl flex-row rounded border border-neutral-200 bg-white">
        <Sidebar selectedRecipient={selectedRecipient} onSelect={setSelectedRecipient} />
        <div className="flex h-full flex-1 flex-col">
          {selectedRecipient === null ? <DirectNull /> : <Conversation />}
        </div>
      </div>
    </Layout>
  );
};

export default Direct;
