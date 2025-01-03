<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <div class="flex flex-col items-center py-20">
      <div class="container">
        <h1 class="text-4xl text-white text-center mb-10">Galeri</h1>
        <div class="grid grid-cols-3 gap-1 place-items-center">
          <div v-for="picture in pictures" class="flex justify-center items-center shadow-xl">
            <NuxtImg :src="picture" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pictures = [
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
]
</script>

<style scoped>

</style>