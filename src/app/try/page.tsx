import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import AuthNavbar from "@/components/Navbar/Auth";

export default function TryPage() {
  return (
    <div className="">
      <AuthNavbar />
      <Banner label={"Explore your Course\nin Here!"} className="h-[257px]" />
      <main className="flex flex-row gap-[60px] p-[80px]">
        Test
      </main>
      <Footer />
    </div>
  );
}
