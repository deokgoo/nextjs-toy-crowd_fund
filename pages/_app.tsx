import '../styles/globals.css'

function MyApp({ Component, pageProps }: {Component: React.FunctionComponent, pageProps: any}) {
  return <Component {...pageProps} />
}

export default MyApp
