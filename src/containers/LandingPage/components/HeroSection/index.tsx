import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="
      flex flex-col items-center justify-center
      min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] // Menyesuaikan tinggi agar responsif
      py-20 px-4 md:px-8 lg:px-16 // Padding horizontal dan vertikal
      bg-gradient-to-br from-[#E0EBF8] to-[#F0F5FA] // Warna background gradient
      text-center font-geologica
    ">
      <h1 className="
        text-4xl md:text-5xl lg:text-6xl xl:text-7xl // Ukuran teks responsif
        font-normal
        leading-tight // Jarak antar baris
        mb-4 md:mb-6 // Margin bawah judul
        text-[#00020E] // Warna teks utama
      ">
        Find Your{" "}
        <span className="bg-gradient-to-r from-[#22315D] to-[#445FAC] text-transparent bg-clip-text">
          Future.
        </span>
        <br />
        Build Your{" "}
        <span className="bg-gradient-to-r from-[#2D5957] to-[#59B0A0] text-transparent bg-clip-text">
          Skills.
        </span>
      </h1>
      <p className="
        text-base md:text-lg lg:text-xl // Ukuran teks responsif
        font-extralight  
        max-w-xl md:max-w-2xl // Batasan lebar teks deskripsi
        mb-8 md:mb-10 // Margin bawah deskripsi
        text-[#6B7280] // Warna teks deskripsi
      ">
        Get personalized career roadmaps and training
        <br className="hidden md:block" />{" "}
        {/* Line break hanya di layar yang lebih besar */}
        recommendations to land your dream job.
      </p>
      <Link href={"/auth/signin"}>
        <button className="
          bg-[#445FAC] // Warna background tombol
          hover:bg-[#34495E] // Warna hover tombol
          text-white // Warna teks tombol
          font-semibold font-geologica
          py-3 px-8 md:py-4 md:px-10 // Padding tombol responsif
          rounded-lg // Sudut melengkung
          shadow-lg // Bayangan tombol
          transition duration-300 ease-in-out // Transisi saat hover
          text-lg md:text-xl // Ukuran teks tombol
        ">
          Get Started
        </button>
      </Link>
      
    </section>
  );
};

export default HeroSection;