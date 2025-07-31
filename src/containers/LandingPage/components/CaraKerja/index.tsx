// src/components/CaraKerja/index.tsx (atau di lokasi yang sesuai)

import React from 'react';
import Image from 'next/image'; // Asumsi menggunakan Next.js Image component

// Definisi interface untuk properti setiap langkah
interface StepItemProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string; // Path ke gambar ilustrasi
  imageAlt: string; // Alt text untuk gambar
  reverseLayout?: boolean; // Properti opsional untuk membalik urutan teks/gambar
}

// Komponen individual untuk setiap langkah
const StepItem: React.FC<StepItemProps> = ({ stepNumber, title, description, imageSrc, imageAlt, reverseLayout }) => {
  return (
    <div className={`
      flex flex-col md:flex-row
      items-center justify-between
      gap-8 md:gap-16 lg:gap-20 // Jarak antar teks dan gambar
      py-10 md:py-12 lg:py-16 // Padding vertikal setiap step
      ${reverseLayout ? 'md:flex-row-reverse' : ''} // Membalik layout di layar medium ke atas
      w-full max-w-6xl // Batasan lebar
    `}>
      {/* Kolom Teks */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
        <span className="
          text-5xl md:text-6xl lg:text-7xl // Ukuran nomor langkah
          font-extrabold
          text-[#445FAC] // Warna nomor langkah (biru)
          mb-4 // Margin bawah nomor
        ">
          {stepNumber}
        </span>
        <h3 className="
          text-3xl md:text-4xl // Ukuran judul langkah
          font-bold
          text-[#2C3E50] // Warna teks judul
          mb-3 // Margin bawah judul
        ">
          {title}
        </h3>
        <p className="
          text-base md:text-lg // Ukuran deskripsi langkah
          text-gray-600 // Warna teks deskripsi
          leading-relaxed // Jarak antar baris
          max-w-md // Batasan lebar teks
        ">
          {description}
        </p>
      </div>

      {/* Kolom Gambar */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-md h-64 md:h-80 lg:h-96"> {/* Container relatif untuk gambar */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill" // Mengisi parent container
            objectFit="contain" // Memastikan gambar terlihat sepenuhnya
            className="rounded-lg shadow-xl" // Sudut membulat dan bayangan pada gambar
          />
        </div>
      </div>
    </div>
  );
};

// Komponen utama CaraKerja
const CaraKerja: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Create Your Profile',
      description: 'Tell us about your goals and skills. It takes less than 3 minutes.',
      imageSrc: '/images/how-it-works-step1.jpg', // Path ke gambar langkah 1
      imageAlt: 'Profile creation form illustration',
      reverseLayout: false, // Teks di kiri, gambar di kanan
    },
    {
      stepNumber: 2,
      title: 'Get Recommendations',
      description: 'Our AI finds the best paths and courses.',
      imageSrc: '/images/how-it-works-step2.jpg', // Path ke gambar langkah 2
      imageAlt: 'Course recommendation illustration',
      reverseLayout: true, // Teks di kanan, gambar di kiri (dibalik)
    },
    {
      stepNumber: 3,
      title: 'Start Learning',
      description: 'Follow links to top providers.',
      imageSrc: '/images/how-it-works-step3.jpg', // Path ke gambar langkah 3
      imageAlt: 'Certificate and course details illustration',
      reverseLayout: false, // Teks di kiri, gambar di kanan
    },
  ];

  return (
    <section className="
      py-16 md:py-20 lg:py-24 // Padding vertikal section
      px-4 md:px-8 lg:px-16 // Padding horizontal section
      bg-gray-50 // Warna background section, sama seperti MainFeatures
      flex flex-col items-center // Menengahkan konten
    ">
      <h2 className="
        text-4xl md:text-5xl lg:text-6xl // Ukuran judul utama
        font-extrabold
        text-[#2C3E50] // Warna teks
        mb-12 md:mb-16 lg:mb-20 // Margin bawah judul
        text-center
      ">
        How It Works
      </h2>

      {steps.map((step, index) => (
        <StepItem
          key={index}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          imageSrc={step.imageSrc}
          imageAlt={step.imageAlt}
          reverseLayout={step.reverseLayout}
        />
      ))}
    </section>
  );
};

export default CaraKerja;