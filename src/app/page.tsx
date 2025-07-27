// src/app/page.tsx

import HeroSection from '@/components/HeroSection'; // Ini sudah benar, karena index.tsx adalah entry point default
import PublicNavbar from '@/components/Navbar/Public'; // Sesuaikan path ini
import Footer from '@/components/Footer'; // Sesuaikan path ini
import MainFeatures from '@/components/MainFeatures';
import CaraKerja from '@/components/CaraKerja';

export default function Home() {
  return (
    <main>
      <PublicNavbar /> {/* Komponen Navbar Public */}
      <HeroSection />
      <MainFeatures/>
      <CaraKerja/>
      <Footer /> {/* Komponen Footer */}
    </main>
  );
}