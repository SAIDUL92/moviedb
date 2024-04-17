import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "Cine Rental | Learn with Sumit",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark">
      <body
        className={`dark:bg-black bg-white font-[Sora] dark:text-white text-dark ${sora.className}`}
      >
        {children}
      </body>
    </html>
  );
}
