import Head from 'next/head';
import * as React from 'react';

import { Layout } from '@/components';
import DirectBox from '@/components/Chat/DirectBox';
import { NextPageWithLayout } from '@/pages/_app';

interface IDirectBoxProps {}

const Direct: NextPageWithLayout<IDirectBoxProps> = () => {
  return (
    <Head>
      <title>Instagram • Chats</title>
    </Head>
  );
};

Direct.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center p-5">
        <DirectBox directNull={true}>{page}</DirectBox>
      </div>
    </Layout>
  );
};

export default Direct;
