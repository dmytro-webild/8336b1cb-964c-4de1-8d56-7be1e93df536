import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Beyoğlu Suites Hotel | Luxury Boutique Suites in Istanbul',
  description: 'Stay in the heart of Istanbul at Beyoğlu Suites Hotel. Boutique luxury apartments steps from Istiklal Street. Book direct for the best rates.',
  openGraph: {
    "title": "Beyoğlu Suites Hotel",
    "description": "Luxury boutique hotel in Taksim, Istanbul.",
    "siteName": "Beyoğlu Suites Hotel",
    "type": "website"
  },
};



const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
