import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { business } from "@/lib/business";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: `${business.name} | نقل عفش الكويت`,
    template: `%s | ${business.nameShort}`,
  },
  description: business.description,
  keywords: [
    "نقل عفش الفروانية",
    "شركة نقل عفش الكويت",
    "نقل عفش الكويت",
    "فك وتركيب عفش الفروانية",
    "تخزين عفش الكويت",
    "نقل اثاث الفروانية",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: business.domain,
    siteName: business.nameShort,
    title: `${business.name} | نقل عفش الكويت`,
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
