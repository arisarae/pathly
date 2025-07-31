// src/app/page.tsx

import HeroSection from '@/containers/LandingPage/components/HeroSection'; // Ini sudah benar, karena index.tsx adalah entry point default
import PublicNavbar from '@/components/Navbar/Public'; // Sesuaikan path ini
import Footer from '@/components/Footer'; // Sesuaikan path ini
import MainFeatures from '@/containers/LandingPage/components/MainFeatures';
import CaraKerja from '@/containers/LandingPage/components/CaraKerja';
import LastSection from '@/containers/LandingPage/components/LastSection';

export default function Home() {
  return (
    <main>
      <PublicNavbar /> {/* Komponen Navbar Public */}
      <HeroSection />
      <MainFeatures/>
      <CaraKerja/>
      <LastSection/>
      <Footer /> {/* Komponen Footer */}
    </main>
  );
}