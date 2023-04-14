import * as React from 'react';
import Head from 'next/head';

import { Layout } from '@/components';
import { NextPageWithLayout } from '@/pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mitchell Vu ー Instagram</title>
        <meta name="description" content="Instagram Direct Clone" />
      </Head>

      <div>Welcome to my project 🫶🏻</div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
