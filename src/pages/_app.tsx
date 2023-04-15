import * as React from 'react';
import type { AppProps } from 'next/app';
import { auth, db } from '@/config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Login from '@/pages/accounts/login';
import LoadingScreen from '@/components/Loading/LoadingScreen';

import '@/styles/globals.scss';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

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

  return getLayout(<Component {...pageProps} />);
}
