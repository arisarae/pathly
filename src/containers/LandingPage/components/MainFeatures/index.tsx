// src/components/MainFeatures/index.tsx (atau di lokasi yang sesuai)

import React from 'react';
import Image from 'next/image'; // Asumsi menggunakan Next.js Image component

// Definisi interface untuk properti setiap fitur
interface FeatureItemProps {
  iconSrc: string; // Path ke ikon
  title: string;
  description: string;
  altText: string; // Alt text untuk gambar ikon
}

// Komponen individual untuk setiap fitur
const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, title, description, altText }) => {
  return (
    <div className="
      flex flex-col items-center text-center
      p-6 md:p-8 lg:p-10 // Padding di dalam kartu
      bg-white
      rounded-2xl // Sudut membulat
      shadow-lg // Bayangan kartu
      border border-gray-100 // Border tipis
      max-w-xs // Batasan lebar kartu
      hover:shadow-xl // Efek hover
      transition-all duration-300 ease-in-out
    ">
      <div className="
        w-20 h-20 md:w-24 md:h-24 // Ukuran container ikon responsif
        flex items-center justify-center
        bg-[#EEF2FF] // Warna background ikon container
        rounded-2xl // Sudut membulat untuk container ikon
        mb-6 // Margin bawah ikon
      ">
        <Image
          src={iconSrc}
          alt={altText}
          width={48} // Ukuran ikon aktual
          height={48} // Ukuran ikon aktual
          className="w-12 h-12 md:w-14 md:h-14" // Ukuran gambar responsif
        />
      </div>
      <h3 className="
        text-xl md:text-2xl // Ukuran judul responsif
        font-bold
        text-[#2C3E50] // Warna teks judul
        mb-3 // Margin bawah judul
      ">
        {title}
      </h3>
      <p className="
        text-base md:text-lg // Ukuran deskripsi responsif
        text-gray-600 // Warna teks deskripsi
        leading-relaxed // Jarak antar baris
      ">
        {description}
      </p>
    </div>
  );
};

// Komponen utama MainFeatures
const MainFeatures: React.FC = () => {
  const features = [
    {
      iconSrc: '/icons/target.svg', // Path ke ikon pertama (sesuaikan jika berbeda)
      altText: 'Target Icon',
      title: 'Career Assessment',
      description: 'Discover your strengths and get personalized career recommendations based on your skills and interests.',
    },
    {
      iconSrc: '/icons/path.svg', // Path ke ikon kedua (sesuaikan jika berbeda)
      altText: 'Path Icon',
      title: 'Path Explorer',
      description: 'Explore detailed career roadmaps with skills, requirements, and progression steps for any field.',
    },
    {
      iconSrc: '/icons/book.svg', // Path ke ikon ketiga (sesuaikan jika berbeda)
      altText: 'Book Icon',
      title: 'Personalized Learning',
      description: 'Get curated course recommendations tailored to your goals and current skill level.',
    },
  ];

  return (
    <section className="
      py-16 md:py-20 lg:py-24 // Padding vertikal section
      px-4 md:px-8 lg:px-16 // Padding horizontal section
      bg-gray-50 // Warna background section (bisa disesuaikan)
      flex flex-col items-center // Menengahkan konten
    ">
      {/* Jika ada judul bagian ini, bisa ditambahkan di sini, misal: */}
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2C3E50]">Our Main Features</h2> */}

      <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 // Tata letak responsif (1 kolom -> 2 -> 3)
        gap-8 md:gap-10 lg:gap-12 // Jarak antar kartu
        w-full max-w-6xl // Lebar maksimum container kartu
        justify-items-center // Menengahkan item dalam grid
      ">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
            altText={feature.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default MainFeatures;