import Head from 'next/head';
import { Layout } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitchell Vu ー Instagram</title>
        <meta name="description" content="Instagram Direct Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div></div>
      </Layout>
    </>
  );
}
