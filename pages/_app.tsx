import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

import type { AppProps } from 'next/app';

import GlobalStyles from '@/components/GlobalStyles';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
