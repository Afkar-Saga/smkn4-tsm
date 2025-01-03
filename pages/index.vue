<template>
  <div>
    <section class="hero min-h-screen" style="background-image: url('/img/bg-hero.jpg')">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content flex-col w-full h-full">
        <div>
          <h1 class="text-6xl text-center text-white font-bold">Selamat Datang di Website <br> SMK Negeri 4 Tasikmalaya
          </h1>
        </div>
      </div>
    </section>
    <div class="flex w-full max-h-60 justify-center absolute -mt-48 z-[2]">
      <div class="flex-[0.3] flex gap-x-10">
        <div
          class="flex justify-center items-center flex-1 rounded-full bg-gray-200 border-orange border-2 shadow-2xl overflow-hidden">
          <NuxtImg src="/img/kepala_sekolah.png" class="w-4/5 -mb-12" />
        </div>
        <div
          class="flex-1 z-[4] rounded-box bg-gray-100 text-black text-sm p-5 border-2 border-black shadow-2xl overflow-auto">
          <h5 class="text-center font-bold text-lg">Sambutan Kepala Sekolah</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore, exercitationem veniam
            reprehenderit eaque eius. In neque excepturi laboriosam iste!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore, exercitationem veniam
            reprehenderit eaque eius. In neque excepturi laboriosam iste!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore, exercitationem veniam
            reprehenderit eaque eius. In neque excepturi laboriosam iste!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore, exercitationem veniam
            reprehenderit eaque eius. In neque excepturi laboriosam iste!</p>
        </div>
      </div>
    </div>
    <section class="min-h-screen flex flex-col items-center py-20 bg-white">
      <div class="container flex flex-col justify-center">
        <h2 class="bg-primary text-white text-4xl font-bold text-center py-3 rounded-xl">Berita <span
            class="font-medium">terbaru</span></h2>
        <div class="mt-3">
          <ul class="flex flex-col gap-y-3 overflow-auto">
            <li v-for="newsItem in news" class="flex gap-x-5 p-3 bg-gray-200 text-black rounded-lg shadow">
              <NuxtImg src="/img/logo_smkn4.png" width="75" class="border-black p-1 border rounded-xl" />
              <NuxtLink to="#">
                <div class="flex flex-col">
                  <h4 class="text-lg font-medium">{{ newsItem.judul }}</h4>
                  <h6 class="text-xs font-semibold text-gray-500">{{ newsItem.waktu }}</h6>
                  <h5 class="text-sm text-gray-800">{{ newsItem.author }}</h5>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="min-h-screen flex justify-center py-20">
      <div class="container flex flex-col items-center gap-y-5">
        <h2 class="text-white text-4xl font-bold text-center">Galeri</h2>
        <div class="grid grid-cols-3 gap-3">
          <div v-for="picture in pictures">
            <NuxtImg :src="picture" class="w-full" />
          </div>
        </div>
        <NuxtLink to="/galeri" class="btn w-fit bg-primary text-white">Lihat Selengkapnya</NuxtLink>
      </div>
    </section>
    <section class="min-h-screen flex justify-center bg-gray-700 py-20 overflow-x-hidden">
      <div class="flex flex-col gap-y-5">
        <h2 class="text-4xl font-bold text-center">Jurusan</h2>
        <div class="flex flex-grow items-center gap-x-40" ref="major">
          <div v-for="major in majors" class="major flex flex-col flex-1 items-center">
            <NuxtImg :src="major.img" width="200" />
            <div class="text-xl text-center">{{ major.name }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-gray-300 text-black py-20">
      <div class="container grid grid-cols-2 gap-x-3 gap-y-5">
        <div class="bg-primary rounded-xl p-3">
          <h2 class="text-4xl text-gray-400 font-bold text-center mb-2">Jumlah Guru</h2>
          <div class="text-white text-center text-3xl">60</div>
        </div>
        <div class="bg-primary rounded-xl p-3">
          <h2 class="text-4xl text-gray-400 font-bold text-center mb-2">Jumlah Siswa</h2>
          <div class="text-white text-center text-3xl">1116</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const news = [
  {
    judul: 'Pengumuman Kelulusan Siswa Tahun Pelajaran 2024/2025',
    waktu: '05-05-2025',
    author: 'SMKN 4 Tasikmalaya'
  },
  {
    judul: 'Pengumuman Kelulusan Siswa Tahun Pelajaran 2024/2025',
    waktu: '05-05-2025',
    author: 'SMKN 4 Tasikmalaya'
  },
  {
    judul: 'Pengumuman Kelulusan Siswa Tahun Pelajaran 2024/2025',
    waktu: '05-05-2025',
    author: 'SMKN 4 Tasikmalaya'
  },
]

const pictures = [
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
  '/img/galeri_1.jpg',
]

const majors = [
  {
    img: '/img/logo_pplg.png',
    name: 'Pengembangan Perangkat Lunak dan Game'
  },
  {
    img: '/img/logo_tjkt.png',
    name: 'Teknik Jaringan Komputer dan Telekomunikasi'
  },
  {
    img: '/img/logo_tsm.png',
    name: 'Teknik Sepeda motor'
  },
  {
    img: '/img/logo_dkv.png',
    name: 'Desain Komunikasi dan Visual'
  },
  {
    img: '/img/logo_toi.jpg',
    name: 'Teknik Otomasi Industri'
  },
]

const { gsap } = useGsap()

const major = ref()
let ctx, tl
onMounted(() => {
  ctx = gsap.context((self) => {
    const majorImages = self.selector('.major')
    tl = gsap.timeline({ repeat: -1 })
      .to(majorImages, { duration: 20, ease: 'none', xPercent: -1000 })
      .to(majorImages, { duration: 0, xPercent: 1000 })
      .to(majorImages, { duration: 20, ease: 'none', xPercent: 0 })
  }, major.value)
})

onUnmounted(() => {
  ctx.revert()
})
</script>

<style scoped></style>