import * as React from 'react';
import { InstagramTypoLogo } from '@/assets/svg';
import Link from 'next/link';
import Head from 'next/head';
import { auth } from '@/config/firebase';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Input } from './login';

const SignUp: React.FC = () => {
  const router = useRouter();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  React.useEffect(() => {
    if (user) router.push('/');
  }, [user, router]);

  return (
    <>
      <Head>
        <title>Instagram • Login</title>
      </Head>

      <main className="flex h-full min-h-screen w-full items-center justify-center">
        <div className="my-6 flex max-w-sm grow flex-col items-stretch gap-3">
          <div className="flex flex-col items-center rounded-md border py-2">
            <div className="pb-3 pt-9">
              <InstagramTypoLogo className="h-14 w-auto" />
            </div>

            <h2 className="mx-10 mb-3 text-center text-lg font-semibold leading-5 text-gray-500">
              Sign up to see photos and videos from your friends.
            </h2>

            <div className="w-full">
              <form className="flex w-full flex-col items-stretch" onSubmit={(e) => e.preventDefault()}>
                <div className="mx-10 my-2">
                  <button
                    className="flex w-full flex-row items-center justify-center gap-2 rounded-lg border px-4 py-2"
                    onClick={() => signInWithGoogle()}
                  >
                    <i className="fa-brands fa-google" />
                    <span className="text-sm font-semibold">Log in with Google</span>
                  </button>
                </div>

                <div className="mx-10 mb-5 mt-3 flex flex-row">
                  <div className="relative top-[0.45em] h-[1px] flex-shrink grow bg-gray-200" />
                  <span className="mx-4 text-sm font-semibold uppercase text-gray-500">or</span>
                  <div className="relative top-[0.45em] h-[1px] flex-shrink grow bg-gray-200" />
                </div>

                <Input name="emailOrPhone" label="Mobile Number or Email" maxLength={75} required />
                <Input name="fullName" label="Full Name" />
                <Input name="username" label="Username" maxLength={30} required />
                <Input type="password" name="password" label="Password" required />

                <div className="text-center text-xs text-gray-500">
                  <div className="mx-10 my-2">
                    <p>
                      People who use our service may have uploaded your contact information to Instagram.{' '}
                      <a href="#" rel="nofollow noopener" target="_blank" className="text-sky-900 active:opacity-50">
                        Learn More
                      </a>
                    </p>
                    <br />
                    <p>
                      By signing up, you agree to our{' '}
                      <a href="#" rel="nofollow noopener" target="_blank" className="text-sky-900 active:opacity-50">
                        Term
                      </a>
                      {' , '}
                      <a href="#" rel="nofollow noopener" target="_blank" className="text-sky-900 active:opacity-50">
                        Privacy Policy
                      </a>
                      {' and '}
                      <a href="#" rel="nofollow noopener" target="_blank" className="text-sky-900 active:opacity-50">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div className="mx-10 my-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white enabled:hover:bg-sky-600 disabled:opacity-70"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-md border py-2">
            <p className="p-4 text-sm">
              {`Have an account? `}
              <Link href="/accounts/login" className="font-semibold text-sky-500">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
