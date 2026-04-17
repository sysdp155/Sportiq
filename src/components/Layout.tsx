import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <ChatBot />
      <CookieConsent />
    </div>
  );
}
