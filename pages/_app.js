import React from 'react';
import '../styles.css';
import 'tailwindcss/tailwind.css';
import {} from 'styled-components/';
import { HelmetProvider } from 'react-helmet-async';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Component {...pageProps} />
      </HelmetProvider>
    </React.StrictMode>
  );
}
