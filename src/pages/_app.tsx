import { headlessConfig } from '@faustjs/core';
import { HeadlessProvider } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'tailwindcss/tailwind.css';
import 'styles/global.css';

headlessConfig({
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
  apiClientSecret: process.env.WP_HEADLESS_SECRET,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadlessProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </HeadlessProvider>
    </>
  );
}
