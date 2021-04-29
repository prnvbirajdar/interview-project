import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProperties = await Document.getInitialProps(context);
    return { ...initialProperties };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
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
}

export default MyDocument;
