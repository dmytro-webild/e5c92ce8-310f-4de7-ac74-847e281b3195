import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Jackson Discount Tobacco - Best Prices on Vapes & Cigars',
  description: 'Your local tobacco shop in Jackson, AL. Offering a wide selection of vapes, cigars, e-liquids, and accessories at discount prices. Friendly service and quality products.',
  keywords: ["Jackson Discount Tobacco, tobacco shop, vape shop, cigars, cigarettes, e-liquids, smoking accessories, discount tobacco, Jackson AL"],
  openGraph: {
    "title": "Jackson Discount Tobacco - Best Prices on Vapes & Cigars",
    "description": "Your local tobacco shop in Jackson, AL. Offering a wide selection of vapes, cigars, e-liquids, and accessories at discount prices. Friendly service and quality products.",
    "url": "https://www.jacksondiscounttobacco.com",
    "siteName": "Jackson Discount Tobacco",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/elderly-man-with-respiratory-problem-having-panic-attack-library_482257-130272.jpg",
        "alt": "Interior of Jackson Discount Tobacco shop"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Jackson Discount Tobacco - Best Prices on Vapes & Cigars",
    "description": "Your local tobacco shop in Jackson, AL. Offering a wide selection of vapes, cigars, e-liquids, and accessories at discount prices. Friendly service and quality products.",
    "images": [
      "http://img.b2bpic.net/free-photo/elderly-man-with-respiratory-problem-having-panic-attack-library_482257-130272.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
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
