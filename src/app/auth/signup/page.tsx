// src/lib/auth.ts

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Peringatan Keamanan: Penggunaan localStorage untuk otentikasi
// TIDAK AMAN untuk aplikasi produksi. Informasi kredensial dapat diakses
// oleh skrip berbahaya (XSS attacks). Ini hanya untuk tujuan demonstrasi/pembelajaran.
// Untuk aplikasi nyata, gunakan Backend Authentication (JWT, sesi, OAuth, dll.).
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

interface User {
  username: string;
  email: string;
  fullName: string;
  password?: string; // Password tidak seharusnya disimpan di sisi klien, tapi untuk demo ini
}

// Fungsi untuk menyimpan user baru ke localStorage
export const registerUser = (user: User): { success: boolean; message: string } => {
  // Pastikan kode ini hanya berjalan di sisi klien (browser)
  if (typeof window === 'undefined') {
    return { success: false, message: "This operation is only available in browser." };
  }

  const usersString = localStorage.getItem('users');
  const users: User[] = usersString ? JSON.parse(usersString) : [];

  // Cek apakah username atau email sudah terdaftar
  const existingUser = users.find(
    (u) => u.username.toLowerCase() === user.username.toLowerCase() || u.email.toLowerCase() === user.email.toLowerCase()
  );

  if (existingUser) {
    return { success: false, message: 'Username or Email already exists.' };
  }

  // Simpan user baru
  const userToSave = { ...user }; // Clone object untuk menghindari mutasi langsung
  users.push(userToSave);
  localStorage.setItem('users', JSON.stringify(users));

  return { success: true, message: 'Registration successful!' };
};

// Fungsi untuk login user dari localStorage
export const loginUser = (emailOrUsername: string, password: string): { success: boolean; message: string; user?: Omit<User, 'password'> } => {
  if (typeof window === 'undefined') {
    return { success: false, message: "This operation is only available in browser." };
  }

  const usersString = localStorage.getItem('users');
  const users: User[] = usersString ? JSON.parse(usersString) : [];

  // Cari user berdasarkan email/username dan password
  const userFound = users.find(
    (u) => (u.email.toLowerCase() === emailOrUsername.toLowerCase() || u.username.toLowerCase() === emailOrUsername.toLowerCase()) && u.password === password
  );

  if (userFound) {
    // Jangan pernah menyimpan atau mengembalikan password ke UI
    const { password, ...userWithoutPassword } = userFound;
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword)); // Simpan user yang sedang login
    return { success: true, message: 'Login successful!', user: userWithoutPassword };
  } else {
    return { success: false, message: 'Invalid credentials.' };
  }
};

// Fungsi untuk mendapatkan user yang sedang login dari localStorage
export const getCurrentUser = (): Omit<User, 'password'> | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const userString = localStorage.getItem('currentUser');
  return userString ? JSON.parse(userString) : null;
};

// Fungsi untuk logout user (menghapus data sesi dari localStorage)
export const logoutUser = (): void => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem('currentUser');
};