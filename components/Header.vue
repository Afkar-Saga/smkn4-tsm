<template>
  <div class="w-full sticky z-10 top-0 bg-primary text-white shadow">
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <NuxtLink to="/">Beranda</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/profil">Profil Sekolah</NuxtLink>
              <ul class="p-2">
                <li>
                  <NuxtLink to="/profil/sejarah">Sejarah</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/profil/visimisi">Visi Misi</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/profil/identitas">Identitas</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/ekskul">Ekstrakurikuler</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/galeri">Galeri</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/kontak">Kontak</NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost text-xl">
          <NuxtImg src="/img/logo_smkn4.png" alt="Logo SMKN 4" width="35" />
          <div>SMKN 4 Tasikmalaya</div>
        </NuxtLink>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li :class="isActive('index') ? activeClass : ''">
            <NuxtLink to="/">Beranda</NuxtLink>
          </li>
          <li :class="isActive('profil') ? activeClass : ''">
            <div class="dropdown dropdown-bottom dropdown-end dropdown-hover">
              <NuxtLink to="/profil">
                <div tabindex="0" role="button">Profil Sekolah</div>
              </NuxtLink>
              <ul tabindex="0"
                class="dropdown-content menu bg-base-100 text-base-content rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <NuxtLink to="/profil/sejarah">Sejarah</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/profil/visimisi">Visi Misi</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/profil/identitas">Identitas</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li :class="isActive('ekskul') ? activeClass : ''">
            <NuxtLink to="/ekskul">Ekstrakurikuler</NuxtLink>
          </li>
          <li :class="isActive('galeri') ? activeClass : ''">
            <NuxtLink to="/galeri">Galeri</NuxtLink>
          </li>
          <li :class="isActive('kontak') ? activeClass : ''">
            <NuxtLink to="/kontak">Kontak</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const activeClass = ref('bg-secondary rounded-xl')
const isActive = name => route.name.includes(name)
</script>

<style scoped></style>