import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';
import { AppProps } from 'next/app';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps, session } = props;
  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
  );
}

export default App;