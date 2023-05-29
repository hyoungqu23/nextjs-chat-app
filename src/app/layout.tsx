import './globals.css';
import { Inter } from 'next/font/google';
import { cls } from '../utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chat App',
  description: 'Private and Group Chat App',
};

export interface ILayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: ILayoutProps) => {
  return (
    <html lang='ko'>
      <body
        className={cls(
          inter.className,
          'bg-gray-300 text-black w-screen min-h-screen',
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
