import { auth, db } from '@/config/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import LoadingScreen from '@/components/Loading/LoadingScreen';
import Login from '@/pages/accounts/login';

import '@/styles/globals.scss';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [loggedInUser, loading] = useAuthState(auth);

  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    NProgress.configure({
      minimum: 0.1,
      showSpinner: false,
      template: `<div class="bar" role="bar">
        <div class="bar-inner"></div>
      </div>`,
    });
    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  React.useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, 'users', loggedInUser?.email ?? ''),
          {
            email: loggedInUser?.email,
            displayName: loggedInUser?.displayName,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser?.photoURL,
          },
          { merge: true },
        );
      } catch (error) {
        console.warn('ERROR SETTING USER INFO IN DB', error);
      }
    };

    if (loggedInUser) {
      setUserInDb();
    }
  }, [loggedInUser]);

  if (loading) return <LoadingScreen />;
  if (!loggedInUser && !router.pathname.includes('account')) return <Login />;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
    </>,
  );
}
