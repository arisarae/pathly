// src/app/dashboard/page.tsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'; // Jika kamu ingin Navbar khusus untuk yang sudah login
import { getCurrentUser, logoutUser } from '@/lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const currentUser = getCurrentUser();

  useEffect(() => {
    // Jika tidak ada user yang sedang login, redirect ke halaman sign in
    if (!currentUser) {
      router.push('/auth/signin');
    }
  }, [currentUser, router]);

  const handleLogout = () => {
    logoutUser(); // Panggil fungsi logout dari src/lib/auth.ts
    router.push('/auth/signin'); // Redirect kembali ke halaman sign in setelah logout
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700">Loading user data or redirecting...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Jika kamu punya AuthNavbar, tempatkan di sini */}
      {/* <AuthNavbar /> */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">Welcome, {currentUser.fullName || currentUser.username}!</h1>
        <p className="text-lg text-gray-700 mb-8">This is your personalized dashboard.</p>
        <button
          onClick={handleLogout} // Ketika tombol ini diklik, fungsi handleLogout akan terpanggil
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </main>
    </div>
  );
}