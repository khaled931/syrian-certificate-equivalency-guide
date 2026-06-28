import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'دليل معادلة الشهادات في سورية | إعداد المهندس خالد الأسعد',
  description:
    'تطبيق عربي مبسط يشرح خطوات معادلة الشهادات الجامعية والأجنبية في سورية، مع مسار خاص للشهادات الصادرة من النرويج.',
  metadataBase: new URL('https://syrian-certificate-equivalency-guide.vercel.app'),
  openGraph: {
    title: 'دليل معادلة الشهادات في سورية',
    description: 'خطوات، وثائق، حالات خاصة، ونصائح عملية للطلاب السوريين والخريجين من الخارج.',
    locale: 'ar_SY',
    type: 'website'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B3551'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
