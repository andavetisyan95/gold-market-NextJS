import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="keywords" content="next,javascript,react" />
        <meta name="description" content="Gold jewelry website" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=Inter:wght@200;300;400;500;600;700&family=Quintessential&family=Roboto:ital@1&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600&family=Comfortaa:wght@600;700&family=Inter:wght@200;300;400;500;600;700&family=Quintessential&family=Roboto:ital@1&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
