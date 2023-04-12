import type { AppProps } from 'next/app';
import { auth } from '@/config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import '@/styles/globals.css';
import Login from '@/pages/accounts/login';

export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser] = useAuthState(auth);

  if (!loggedInUser) return <Login />;

  return <Component {...pageProps} />;
}
