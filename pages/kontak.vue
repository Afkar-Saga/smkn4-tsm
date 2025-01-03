<template>
  <div class="min-h-screen flex bg-base-100 text-base-content">
    <div class="flex flex-grow flex-col justify-center items-center py-20">
      <div class="container flex flex-col items-center">
        <h1 class="text-4xl text-white text-center mb-10">Kontak Kami</h1>
        <div class="form-control w-1/3 bg-white rounded-2xl items-center gap-y-3 p-5 border-2 border-gray-300 shadow-2xl">
          <input type="text" placeholder="Nama Lengkap" class="input input-bordered w-full">
          <input type="text" placeholder="Email" class="input input-bordered w-full">
          <textarea class="textarea textarea-bordered w-full" placeholder="Pesan"></textarea>
          <button class="btn bg-primary text-white">Kirim</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped></style>