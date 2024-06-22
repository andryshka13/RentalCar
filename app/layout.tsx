import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Rental Car",
  description: "Discover our cars",
  icons: {
    icon: "/app/Car-Rental-Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
