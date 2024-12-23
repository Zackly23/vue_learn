<script setup>
import HeroSection from '@/components/HeroSection.vue';
import PostCard from '@/components/PostCard.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';


// State untuk menyimpan data posts
const posts = ref([])

const fetchPosts = async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get('http://127.0.0.1:8000/api/v1/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    posts.value = response.data; // Menyimpan data ke state posts
    console.log('Response:', response.data); // Debug response
  } catch (error) {
    console.error('Error fetching posts:', error.response || error.message);
  }
};

// Panggil fetchPosts saat komponen dimuat
onMounted(() => {
  fetchPosts();
});


</script>

<template>
  <Navbar />
  <div >
    
    <!-- Hero Section -->
    <HeroSection />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8" >
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.body"
        :image="post.image"
        :date="post.date"
        :category="post.status"
      /> 
    </div> 
  </div>
  <Footer />
</template>
