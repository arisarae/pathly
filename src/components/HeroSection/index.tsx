// src/components/HeroSection/index.tsx (atau di lokasi yang sesuai)

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="
      flex flex-col items-center justify-center
      min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] // Menyesuaikan tinggi agar responsif
      py-16 px-4 md:px-8 lg:px-16 // Padding horizontal dan vertikal
      bg-gradient-to-br from-[#E0EBF8] to-[#F0F5FA] // Warna background gradient
      text-center
    ">
      <h1 className="
        text-4xl md:text-5xl lg:text-6xl xl:text-7xl // Ukuran teks responsif
        font-extrabold
        leading-tight // Jarak antar baris
        mb-4 md:mb-6 // Margin bawah judul
        text-[#2C3E50] // Warna teks utama
      ">
        Find Your <span className="text-[#445FAC]">Future.</span>
        <br />
        Build Your <span className="text-[#3CB371]">Skills.</span>
      </h1>
      <p className="
        text-lg md:text-xl lg:text-2xl // Ukuran teks responsif
        font-medium
        max-w-xl md:max-w-2xl // Batasan lebar teks deskripsi
        mb-8 md:mb-10 // Margin bawah deskripsi
        text-gray-600 // Warna teks deskripsi
      ">
        Get personalized career roadmaps and training recommendations
        <br className="hidden md:block" /> {/* Line break hanya di layar yang lebih besar */}
        to land your dream job.
      </p>
      <button className="
        bg-[#445FAC] // Warna background tombol
        hover:bg-[#34495E] // Warna hover tombol
        text-white // Warna teks tombol
        font-semibold
        py-3 px-8 md:py-4 md:px-10 // Padding tombol responsif
        rounded-lg // Sudut melengkung
        shadow-lg // Bayangan tombol
        transition duration-300 ease-in-out // Transisi saat hover
        text-lg md:text-xl // Ukuran teks tombol
      ">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;