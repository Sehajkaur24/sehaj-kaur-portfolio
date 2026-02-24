import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "Sehaj Kaur | Portfolio",
  description: "B.Tech CSE Student | AI/ML Enthusiast | Athlete | Innovator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <html lang="en" suppressHydrationWarning>
      <body className="pt-24 bg-[#f5f1eb] text-[#4a3f35] transition-all duration-500">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}