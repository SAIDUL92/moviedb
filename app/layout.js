import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";


const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "Cine Rental | Learn with Sumit",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body className={`dark:bg-black bg-white font-[Sora] dark:text-white text-dark ${sora.className}`}>

        {/* Begin header */}
        <Header />
        {/* End Header */}

        {/* Begin Main */}

        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            {/* Sidebar */}
            <SideBar />

            {/* Content */}
            {children}

          </div>
        </main>


        {/* End Main */}

        {/* Footer */}
        <Footer />
        <div id="modal-root-content"></div>
      </body>
    </html>
  );
}
