<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
    import { useRouter } from 'vue-router';
  
  const router = useRouter()
  // State untuk form
  const form = ref({
    title: '',
    body: '',
    status: 'active',
    image: null,
  });

  const statusPost = ref([]);
  
  // Mengunggah file gambar
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    form.value.image = file;
  };
  
  // Submit form
  const submitPost = async () => {
    try {
      // Form data untuk dikirim
      const formData = new FormData();
      formData.append('title', form.value.title);
      formData.append('body', form.value.body);
      formData.append('status', form.value.status);
  
      if (form.value.image) {
        formData.append('image', form.value.image);
      }
  
      // Kirim permintaan POST ke API
      const response = await axios.post('http://127.0.0.1:8000/api/v1/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      alert('Post created successfully!');
      console.log('Response:', response.data);
  
      // Reset form setelah berhasil
      form.value.title = '';
      form.value.body = '';
      form.value.status = 'active';
      form.value.image = null;

      router.push('/');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    }
  };



  const getStatusPost = async () => {
    try {

        const token = localStorage.getItem('token')
        const response = await axios.get('http://127.0.0.1:8000/api/v1/status-post', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
        statusPost.value = response.data;
        console.log(response.data)
    } catch (error) {
        console.error('Error get status:', error);
        alert('Failed to get post status. Please try again.');
    }
  }

  onMounted (() => {
    getStatusPost();
  });

  </script>

<template>
    <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Create New Post</h2>
      <form @submit.prevent="submitPost">
        <!-- Title -->
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            v-model="form.title"
            class="mt-1 p-2 block w-full border rounded text-sm"
            placeholder="Enter the title"
            required
          />
        </div>
  
        <!-- Body -->
        <div class="mb-4">
          <label for="body" class="block text-sm font-medium text-gray-700">Body</label>
          <textarea
            id="body"
            v-model="form.body"
            class="mt-1 p-2 block w-full border rounded text-sm"
            rows="5"
            placeholder="Write your post content"
            required
          ></textarea>
        </div>
  
        <!-- Status -->
        <div class="mb-4">
          <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
          <select
            id="status"
            v-model="form.status"
            class="mt-1 p-2 block w-full border rounded text-sm"
            required
          >
            <option v-for="status in statusPost" :key="status.id" :value="status.status">
              {{ status.status }}
            </option>           
          </select>
        </div>
  
        <!-- Image -->
        <div class="mb-4">
          <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            id="image"
            @change="handleImageUpload"
            accept="image/*"
            class="mt-1 block w-full text-sm"
          />
        </div>
  
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none"
        >
          Submit Post
        </button>
      </form>
    </div>
  </template>
  
  
  
  <style scoped>
  /* Tambahkan styling opsional jika diperlukan */
  </style>
  