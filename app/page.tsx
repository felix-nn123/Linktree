import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Home() {
  return (
    <div className="w-full min-h-full bg-[#0b0707]">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
