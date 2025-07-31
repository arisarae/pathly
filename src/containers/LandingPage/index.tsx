import HeroSection from "@/containers/LandingPage/components/HeroSection"; // Ini sudah benar, karena index.tsx adalah entry point default
import PublicNavbar from "@/components/Navbar/Public"; // Sesuaikan path ini
import Footer from "@/components/Footer"; // Sesuaikan path ini
import MainFeatures from "@/containers/LandingPage/components/MainFeatures";
import CaraKerja from "@/containers/LandingPage/components/CaraKerja";
import LastSection from "@/containers/LandingPage/components/LastSection";

export default function LandingPage() {
  return (
    <>
      <PublicNavbar /> {/* Komponen Navbar Public */}
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
