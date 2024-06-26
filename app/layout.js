import Navbar from '@/components/navbar';
import './globals.css';

export const metadata = {
  title: 'Sketch Fab',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
