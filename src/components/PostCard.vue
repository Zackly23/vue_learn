 <script setup>
  defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "https://via.placeholder.com/400x200" },
    date: { type: String, required: true },
    category: { type: String, required: true },
  });
  </script>

<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <!-- Gambar Post -->
      <img :src="image" alt="Post Image" class="w-full h-40 object-cover" />
  
      <!-- Konten Post -->
      <div class="p-4">
        <!-- Judul Post -->
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h2>
  
        <!-- Deskripsi Singkat -->
        <p class="text-gray-600 text-sm mb-4">
          {{ description }}
        </p>
  
        <!-- Meta Data: Tanggal & Kategori -->
        <div class="flex justify-between items-center text-gray-500 text-sm">
          <span>{{ date }}</span>
          <span class="bg-blue-100 text-blue-600 px-2 py-1 rounded">{{ category }}</span>
        </div>
      </div>
    </div>
  </template>
  
 
  
  <style scoped>
  /* Efek hover */
  div {
    transition: transform 0.3s ease;
  }
  div:hover {
    transform: translateY(-5px);
  }
  </style>
  