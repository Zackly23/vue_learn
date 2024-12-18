<script setup>
import HeroSection from '@/components/HeroSection.vue';
import PostCard from '@/components/PostCard.vue';

const posts = [
  {
    title: "Belajar Vue.js dari Dasar",
    description: "Panduan belajar Vue.js mulai dari dasar hingga tingkat lanjut.",
    image: "https://picsum.photos/id/121/400/200",
    date: "20 Agustus 2024",
    category: "Programming",
  },
  {
    title: "Tips Menggunakan Tailwind CSS",
    description: "Optimalkan gaya desain dengan Tailwind CSS untuk proyek web.",
    image: "https://picsum.photos/id/111/400/200",
    date: "18 Agustus 2024",
    category: "Web Design",
  },
  {
    title: "API Response Validation Menggunakan Custom Request",
    description: "Optimalkan gaya desain dengan Tailwind CSS untuk proyek web.",
    image: "https://picsum.photos/id/323/400/200",
    date: "18 Agustus 2024",
    category: "Web Design",
  },
  {
    title: "API Response Validation Menggunakan Custom Request",
    description: "Optimalkan gaya desain dengan Tailwind CSS untuk proyek web.",
    image: "https://picsum.photos/id/322/400/200",
    date: "18 Agustus 2024",
    category: "Web Design",
  },
];

</script>

<template>
  <div >
    <!-- Hero Section -->
    <HeroSection />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8" >
      <PostCard
        v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :description="post.description"
        :image="post.image"
        :date="post.date"
        :category="post.category"
      /> 
    </div> 
  </div>
</template>
