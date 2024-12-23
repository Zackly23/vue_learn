<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref, onMounted, onUpdated } from 'vue';
import axios from 'axios';
// Periksa apakah token ada di LocalStorage

const isLoggedIn = ref(false);

// Periksa apakah token ada di LocalStorage
const checkLoginStatus = () => {
  const token = localStorage.getItem('token');
  isLoggedIn.value = !!token; // true jika token ada
  // console.log(!isLoggedIn.value)
  
};

const router = useRouter();

const logout = async () => {
  const token = localStorage.getItem('token');

  try {
    // Kirim permintaan logout ke API
    await axios.post('http://127.0.0.1:8000/api/v1/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Arahkan ke halaman login
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error);
    alert('Failed to logout. Please try again.');
  } finally {
      // Hapus token dari LocalStorage
      localStorage.removeItem('token');
  }

};

onMounted(() => {
  checkLoginStatus();
});


</script>

<template>
  
<div>
  <nav>
    <div class="">
      <div class="flex justify-between h-16 px-10 shadow items-center">
        <div class="flex items-center space-x-8">
          <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">Tailwind</h1>
          <div class="hidden md:flex justify-around space-x-4">
            <RouterLink to="/" class="hover:text-indigo-600 text-gray-700">Home</RouterLink>
            <RouterLink to="/about" class="hover:text-indigo-600 text-gray-700">About</RouterLink>
            <RouterLink to="/chatting" class="hover:text-indigo-600 text-gray-700">Chat</RouterLink>
          </div>
        </div>
        <div>
    <!-- Jika tidak login -->
    <div v-if="!isLoggedIn" class="flex space-x-4 items-center">
      <RouterLink to="/login" class="text-gray-800 text-sm">LOGIN</RouterLink>
      <RouterLink to="/sign-up" class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</RouterLink>
    </div>

    <!-- Jika login -->
    <div v-else class="flex space-x-4 items-center">
      <RouterLink to="/post/create" class="text-gray-800 text-sm">CREATE POST</RouterLink>
      <button 
        @click="logout"
        class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
        LOGOUT
      </button>
    </div>
  </div>
      </div>
    </div>
  </nav>
</div>
</template>