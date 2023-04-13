import { Layout } from '@/components';
import DirectBox from '@/components/Chat/ChatBox';
import DirectThreadMessages from '@/components/Chat/Feed/DirectThreadMessages';
import Head from 'next/head';
import * as React from 'react';
import { NextPageWithLayout } from '@/pages/_app';
// import { GetServerSideProps } from 'next';
import { doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { generateQueryGetMessages, transformMessage } from '@/utils/getMessagesInConversation';
import { Conversation as IConversation, IMessage } from '@/types';
import { useRouter } from 'next/router';

interface IDirectConversationProps {
  conversation: IConversation;
  messages: IMessage[];
}

const DirectConversation: NextPageWithLayout<IDirectConversationProps> = () => {
  const router = useRouter();
  const { threadId } = router.query;
  const [conversation, setConversation] = React.useState<IConversation | null>(null);
  const [messages, setMessages] = React.useState<IMessage[] | null>(null);

  React.useEffect(() => {
    const fetch = async () => {
      const conversationId = threadId;

      // get conversation, to know who we are chatting with
      const conversationRef = doc(db, 'threads', conversationId as IConversation['id']);
      const conversationSnapshot = await getDoc(conversationRef);

      // get all messages between logged in user and recipient in this conversation
      const queryMessages = generateQueryGetMessages(conversationId as IConversation['id']);
      const messagesSnapshot = await getDocs(queryMessages);
      setMessages(messagesSnapshot.docs.map((messageDoc) => transformMessage(messageDoc)));

      setConversation(conversationSnapshot.data() as IConversation);
    };

    fetch();
  }, [threadId]);

  return conversation && messages && <DirectThreadMessages thread={conversation} messages={messages} />;
};

DirectConversation.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Head>
        <title>Instagram • Chats</title>
      </Head>
      <Layout>
        <div className="fixed flex h-full w-full items-center justify-center p-5">
          <DirectBox>{page}</DirectBox>
        </div>
      </Layout>
    </>
  );
};

export default DirectConversation;
