import React from 'react';

const LastSection: React.FC = () => {
  return (
    <section className="
      flex flex-col items-center justify-center
      py-20 md:py-24 lg:py-28 // Padding vertikal section
      px-4 md:px-8 lg:px-16 // Padding horizontal section
      // Background gradient sesuai gambar
      bg-gradient-to-br from-[#E0EBF8] to-[#F0F5FA]
      text-center font-geologica
    ">
      <h2 className="
        text-4xl md:text-5xl lg:text-6xl // Ukuran judul responsif
        font-normal
        text-[#00020E] // Warna teks judul
        mb-4 md:mb-6 // Margin bawah judul
        leading-tight // Jarak antar baris
        max-w-4xl // Batasan lebar judul
      ">
        Ready to Take the Next Step?
      </h2>
      <p className="
        text-lg md:text-xl // Ukuran deskripsi responsif
        font-extralight
        text-[#6B7280] // Warna teks deskripsi
        mb-8 md:mb-10 // Margin bawah deskripsi
        max-w-2xl // Batasan lebar deskripsi
        leading-relaxed // Jarak antar baris
      ">
        Join thousands of professionals who have transformed their careers with Pathly.
      </p>
      <button className="
        bg-[#445FAC] // Warna background tombol
        hover:bg-[#34495E] // Warna hover tombol
        text-white // Warna teks tombol
        font-medium font-geologica
        py-3 px-5 md:py-4 md:px-8 // Padding tombol responsif
        rounded-lg // Sudut melengkung
        shadow-lg // Bayangan tombol
        transition duration-300 ease-in-out // Transisi saat hover
        text-lg md:text-xl // Ukuran teks tombol
      ">
        Lets Get Started!
      </button>
    </section>
  );
};

export default LastSection;