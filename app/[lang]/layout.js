import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

export const metadata = {
  title: "Cine Rental | Learn with Sumit",
  description: "Cine Rental | Learn with Sumit",
};

export default function MovieLayout({ params: { lang }, children, modal }) {
  return (
    <>
      {/* Begin header */}
      <Header />
      {/* End Header */}

      {/* Begin Main */}
      {modal}

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          {/* Sidebar */}
          <SideBar lang={lang} />
          {/* Content */}
          {children}
        </div>
      </main>

      {/* End Main */}

      {/* Footer */}
      <Footer lang={lang} />
    </>
  );
}
