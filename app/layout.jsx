import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Firawan Luthfiy M Rafiq — Front-end Web Developer",
  description: "Portofolio web modern Firawan Luthfiy M Rafiq, Front-end Web Developer & Web Developer Enthusiast (D3 Teknik Informatika Universitas Amikom Yogyakarta).",
  keywords: ["Firawan Luthfiy M Rafiq", "Front-end Web Developer", "Laravel", "NestJS", "Amikom Yogyakarta", "PHP", "JavaScript"],
  authors: [{ name: "Firawan Luthfiy M Rafiq" }],
  openGraph: {
    title: "Firawan Luthfiy M Rafiq — Front-end Web Developer",
    description: "Front-end Web Developer & Web Developer Enthusiast • Universitas Amikom Yogyakarta.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark text-white font-sans antialiased selection:bg-blue-600 selection:text-white relative min-h-screen flex flex-col justify-between">
        {/* Custom Cursor & Scroll Progress */}
        <CustomCursor />
        <ScrollProgress />

        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Main Content Body */}
        <main className="flex-grow">{children}</main>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}
