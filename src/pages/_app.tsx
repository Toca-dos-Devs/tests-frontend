import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Agendamento Fácil</title>
        <link rel="shortcut icon" href="/icon.svg" />

        <meta
          name="description"
          content="A simple project starter to work TypeScript, React,NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
