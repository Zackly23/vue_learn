<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';


  const router = useRouter();

  // State untuk form
  const formLogin = ref({
    email: '',
    password: '',
  });
  
  // Method untuk proses registrasi
  const register = async () => {
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/login', {
        email: formLogin.value.email,
        password: formLogin.value.password,
      });
      alert('Login successful!');
    //   console.log('Response:', response.data.token);
      localStorage.setItem('token', response.data.token)
      router.push('/');
    } catch (error) {
      console.error('Error during Login:', error.response || error);
      alert('Login failed. Please try again.');
    }
  };
  </script>
  
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <form @submit.prevent="register" class="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input v-model="formLogin.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input v-model="formLogin.password" type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Login
        </button>
      </form>
    </div>
  </template>
  
  