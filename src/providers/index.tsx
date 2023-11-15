'use client';

import { CacheProvider } from '@chakra-ui/next-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

import ChakraProvider from './ChakraProvider';

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <CacheProvider>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
