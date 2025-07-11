// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'M. Mughni | Web Developer',
  description: 'Portofolio Web Developer menggunakan Next.js dan Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-300`}>
        {children}
      </body>
    </html>
  );
}