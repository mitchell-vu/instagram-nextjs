import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
