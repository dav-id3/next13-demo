import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Toast from './toast';

export const metadata = {
  title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
          {children}
        {/* <Analytics /> */}
        <Toast />
      </body>
    </html>
  );
}
