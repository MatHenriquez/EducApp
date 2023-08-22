import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.scss';

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
