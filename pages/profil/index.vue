<template>
  <div class="min-h-screen bg-white items-center gap-y-20">
    <div class="flex justify-center py-10 bg-gray-700">
      <div class="container">
        <h1 class="flex-1 py-3 bg-primary text-white font-bold text-center text-4xl rounded-xl">Profil Sekolah</h1>
      </div>
    </div>
    <section class="min-h-screen flex justify-center items-center bg-gray-300 text-black py-20">
      <div class="container flex flex-col items-center gap-y-10">
        <h2 class="text-center text-2xl font-bold mb-5">Sejarah</h2>
        <p>Sejalan dengan Program Pemerintah dibidang pendidikan Menengah Kejuruan pada saat itu yakni pemerataan akses
          ditambah pula dengan banyaknya keinginan masyarakat yang mengharapkan adanya SMK Negeri di daerah Kecamatan
          Purbaratu Kota Tasikmalaya, terutama untuk menampung tamatan dari SLTP yang ingin melanjutkan ke SMK maka
          beberapa tokoh masyarakat, unsur pejabat pemerintah di Kecamatan Purbaratu Kota Tasikmalaya mengusulkan kepada
          pemerintah Kota Tasikmalaya dan Pemerintah Provinsi Jawa Barat, agar berdirinya SMK Negeri di Kecamatan
          Purbaratu Kota Tasikmalaya.</p>
        <NuxtLink to="/profil/sejarah" class="btn bg-primary text-white">Read more...</NuxtLink>
      </div>
    </section>
    <section class="min-h-screen flex justify-center items-center bg-gray-700 text-white py-20">
      <div class="container flex flex-col items-center gap-y-10">
        <h2 class="text-center text-2xl font-bold mb-5">Visi Misi</h2>
        <h5 class="font-bold">Visi :</h5>
        <p>"Dengan Berlandaskan Iman dan Taqwa Menghasilkan Tamatan yang Cerdas,Akhlak mulia, Kreatif, Aktif, Produktif
          (CAKAP)"</p>
        <h5 class="font-bold">Misi :</h5>
        <p>1. Mengembangkan kecerdasan Peserta didik agar Berprestasi, beriman dan bertaqwa pada Tuhan Yang maha Esa,
          berakhlak mulia, berkarakter, berwawasan kebangsaan, berjiwa entrepreneur, serta peduli lingkungan.</p>
        <NuxtLink to="/profil/visimisi" class="btn bg-primary text-white">Read more...</NuxtLink>
      </div>
    </section>
    <section class="min-h-screen flex justify-center items-center bg-gray-300 text-black py-20">
      <div class="container flex flex-col items-center gap-y-10">
        <h2 class="text-center text-2xl font-bold mb-5">Identitas SMK Negeri 4 Tasikmalaya</h2>
        <div class="overflow-x-auto">
          <table class="table">
            <tbody>
              <tr>
                <th>a.</th>
                <th>Nama Sekolah</th>
                <td>SMK Negeri 4 Kota Tasikmalaya</td>
              </tr>
              <tr>
                <th>b.</th>
                <th>NPSN</th>
                <td>20276063</td>
              </tr>
              <tr>
                <th>c.</th>
                <th>Nomor Statistik Sekolah</th>
                <td>401327810004</td>
              </tr>
              <tr>
                <th>d.</th>
                <th>Alamat</th>
                <td>SMK Negeri 4 Kota Tasikmalaya</td>
              </tr>
              <tr>
                <th></th>
                <td>Jalan</td>
                <td>Jl Depok RT 02 RW 05</td>
              </tr>
              <tr>
                <th></th>
                <td>Kelurahan</td>
                <td>Sukamenak</td>
              </tr>
              <tr>
                <th></th>
                <td>Kecamatan</td>
                <td>Purbaratu</td>
              </tr>
              <tr>
                <th></th>
                <td>Kota</td>
                <td>Tasikmalaya</td>
              </tr>
            </tbody>
          </table>
        </div>
        <NuxtLink to="/profil/identitas" class="btn bg-primary text-white">Read more...</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped></style>