// Exemplo: _app.tsx

import { MyContextProvider } from './myContext';

function MyApp({ Component, pageProps }: any) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
