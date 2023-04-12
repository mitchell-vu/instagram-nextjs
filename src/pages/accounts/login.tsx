import * as React from 'react';
import { InstagramLogo } from '@/assets/svg';
import Link from 'next/link';
import Head from 'next/head';
import { auth } from '@/config/firebase';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

export const Input: React.FC<IInputProps> = ({ label, ...rest }) => {
  return (
    <fieldset className="mx-10 mb-1 overflow-hidden rounded border bg-gray-50">
      <label className="relative flex h-9 w-full">
        <span className="pointer-events-none absolute left-2 right-0 h-9 w-full truncate align-middle text-xs leading-9 text-gray-500">
          {label}
        </span>
        <input
          type="text"
          className="w-full bg-gray-50 p-2 text-xs outline-none"
          aria-label={label}
          aria-required="true"
          autoCapitalize="off"
          autoCorrect="off"
          {...rest}
        />
      </label>
    </fieldset>
  );
};

const Login: React.FC = () => {
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
              <InstagramLogo className="h-14 w-auto" />
            </div>

            <div className="mb-3 mt-8 w-full">
              <form className="flex w-full flex-col items-stretch" onSubmit={(e) => e.preventDefault()}>
                <Input name="username" label="Phone number, username, or email" maxLength={75} />
                <Input type="password" name="password" label="Password" />

                <div className="mx-10 my-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
                  >
                    Log in
                  </button>
                </div>

                <div className="mx-10 mb-5 mt-3 flex flex-row">
                  <div className="relative top-[0.45em] h-[1px] flex-shrink grow bg-gray-200" />
                  <span className="mx-4 text-sm font-semibold uppercase text-gray-500">or</span>
                  <div className="relative top-[0.45em] h-[1px] flex-shrink grow bg-gray-200" />
                </div>

                <div className="mx-10 my-2">
                  <button
                    className="flex w-full flex-row items-center justify-center gap-2"
                    onClick={() => signInWithGoogle()}
                  >
                    <i className="fa-brands fa-google" />
                    <span className="text-sm font-semibold">Log in with Google</span>
                  </button>
                </div>

                <Link href="/accounts/password/reset" className="mt-3 block w-full text-center text-xs text-sky-900">
                  Forgot password?
                </Link>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-md border py-2">
            <p className="p-4 text-sm">
              {`Don't have an account? `}
              <Link href="/accounts/signup" className="font-semibold text-sky-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
