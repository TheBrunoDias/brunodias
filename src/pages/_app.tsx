import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LanguageContextProvider } from '@Contexts/LanguageContext';
import { Header } from '@Components/Layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bruno Dias - Full Stack Developer</title>
      </Head>
      <LanguageContextProvider>
        <Header />
        <Component {...pageProps} />
      </LanguageContextProvider>
    </>
  );
}

export default MyApp;
