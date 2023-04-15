import * as React from 'react';
import { InstagramTypoLogo } from '@/assets/svg';
import Link from 'next/link';
import Head from 'next/head';
import { auth } from '@/config/firebase';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}

export const Input: React.FC<IInputProps> = ({ label, ...rest }) => {
  const [value, setValue] = React.useState('');
  const [type, setType] = React.useState(rest?.type || 'text');

  const togglePassword = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <fieldset className="mx-10 mb-1 flex flex-row items-center overflow-hidden rounded border bg-gray-50">
      <label className="relative flex h-9 grow">
        <span
          className={classNames(
            'pointer-events-none absolute left-2 right-0 h-9 w-full origin-left transform transition',
            'truncate align-middle text-xs leading-9 text-gray-500',
            { '-translate-y-2 scale-75': value },
          )}
        >
          {label}
        </span>
        <input
          {...rest}
          type={type}
          className={classNames('w-full bg-gray-50 p-2 outline-none', { 'pb-0.5 pr-0 pt-[14px] text-xs': value })}
          aria-label={label}
          aria-required={rest.required ?? 'false'}
          autoCapitalize="off"
          autoCorrect="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>

      {rest.type === 'password' && value && (
        <button className="ml-2 pr-2 text-sm font-semibold hover:opacity-50 active:opacity-50" onClick={togglePassword}>
          {type === 'password' ? 'Show' : 'Hide'}
        </button>
      )}
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
              <InstagramTypoLogo className="h-14 w-auto" />
            </div>

            <div className="mb-3 mt-8 w-full">
              <form className="flex w-full flex-col items-stretch" onSubmit={(e) => e.preventDefault()}>
                <Input name="username" label="Phone number, username, or email" maxLength={75} required />
                <Input type="password" name="password" label="Password" required />

                <div className="mx-10 my-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white enabled:hover:bg-sky-600 disabled:opacity-70"
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
