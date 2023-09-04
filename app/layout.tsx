import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReduxProvider } from "./Provider";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
export const metadata = {
  title: "OnlineStore",
  description: "OnlineStore",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" className={montserrat.className}>
        <body>
          <Toaster position="top-right" reverseOrder={false} />
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
