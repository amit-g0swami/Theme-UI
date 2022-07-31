import App from 'next/app';
import { ThemeProvider, Container } from 'theme-ui';
import NProgress from 'next-nprogress-emotion';
import theme from '../theme';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
        </Head>
        <NProgress />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
