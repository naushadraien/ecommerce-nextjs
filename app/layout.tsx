import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReduxProvider } from "./Provider";

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
    <ReduxProvider>
      <ReactQueryProvider>
        <html lang="en" className={montserrat.className}>
          <body>
            <Header />
            {children}
          </body>
        </html>
      </ReactQueryProvider>
    </ReduxProvider>
  );
}
