import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.scss';
import { Inter } from 'next/font/google';
/* import Providers from './_app'; */
import { AppProvider } from '../context/userContext';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Plataforma Universitaria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Navbar />
          {children}
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}
