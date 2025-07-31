import HeroSection from "@/containers/LandingPage/components/HeroSection"; // Ini sudah benar, karena index.tsx adalah entry point default
import Navbar from "@/components/Navbar"; // Sesuaikan path ini
import Footer from "@/components/Footer"; // Sesuaikan path ini
import MainFeatures from "@/containers/LandingPage/components/MainFeatures";
import CaraKerja from "@/containers/LandingPage/components/CaraKerja";
import LastSection from "@/containers/LandingPage/components/LastSection";

export default function LandingPage() {
  return (
    <>
      <Navbar /> {/* Komponen Navbar */}
      <main>
        <HeroSection />
        <MainFeatures />
        <CaraKerja />
        <LastSection />
      </main>
      <Footer /> {/* Komponen Footer */}
    </>
  );
}
