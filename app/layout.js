import "../styles/globals.css";

export const metadata = {
  title: 'Visionary Vectors',
  icons: {
    icon: '/metadroid-fav.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
