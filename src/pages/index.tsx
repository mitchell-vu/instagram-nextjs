import Head from 'next/head';
import { Layout } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mitchell Vu ー Instagram</title>
        <meta name="description" content="Instagram Direct Clone" />
      </Head>

      <Layout>
        <div>Welcome to my project 🫶🏻</div>
      </Layout>
    </>
  );
}
