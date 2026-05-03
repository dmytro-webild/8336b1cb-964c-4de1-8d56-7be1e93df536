import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



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

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
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
