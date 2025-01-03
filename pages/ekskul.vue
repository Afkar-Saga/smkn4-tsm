<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <div class="flex flex-col items-center py-20">
      <div class="container">
        <h1 class="text-4xl text-white text-center mb-10">Ekstrakurikuler</h1>
        <div class="grid grid-cols-3 gap-5 place-items-center">
          <div v-for="ekskul in ekskuls" class="rounded-full w-40 h-40 flex justify-center items-center bg-primary border-gray-900 border-4 shadow-xl">
            <h4 class="text-white text-xl font-medium">{{ ekskul.nama }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const ekskuls = [
  {
    nama: 'IT Club'
  },
  {
    nama: 'English Club'
  },
  {
    nama: 'Futsal'
  },
  {
    nama: 'Paskibra'
  },
  {
    nama: 'Pramuka'
  },
  {
    nama: 'Safety Riding'
  },
  {
    nama: 'Basket'
  },
  {
    nama: 'Badminton'
  },
]
</script>

<style scoped>

</style>