import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br" className=" bg-dark-500 text-light-500 scroll-smooth">
      <Head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#009E66" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Bruno Dias - Full Stack Developer" />
        <meta name="twitter:image" content="/images/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Bruno Dias - Full Stack Developer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Natural de Foz do Iguaçu - PR, sou graduado em Análise e Desenvolvimento de Sistemas pela Universidade Uniamérica. Comecei a trabalhar como desenvolvedor web em 2020 e desde então venho adquirindo cada vez mais experiência como Full Stack, tendo atuado em vários projetos profissionais e pessoais ao longo desses anos. Atualmente estou me aperfeiçoando em novas tecnologias como Next.js, Nest.js e microsserviços."
        />
        <meta name="keywords" content="fullstack, frontend, backend, next.js, react.js, desenvolvedor web" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
