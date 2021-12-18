<script setup></script>

<template>
  <div class="flex items-center justify-between mb-20">
    <h1 class="text-3xl primary-color font-semibold">RT</h1>
    <div class="flex items-center justify-center">
      <nav class="lg:block hidden">
        <router-link to="/" class="mr-8 primary-color text-xl font-medium"
          >Inicio</router-link
        >
        <router-link
          :to="{ name: 'about' }"
          class="mr-8 primary-color text-xl font-medium"
          >¿Quienes somos?</router-link
        >
        <router-link
          :to="{ name: 'news' }"
          class="mr-8 primary-color text-xl font-medium"
          >Noticias</router-link
        >
        <router-link
          :to="{ name: 'plans' }"
          class="mr-8 primary-color text-xl font-medium"
          >Planes</router-link
        >
        <router-link :to="{name: 'speedTest'}" class="mr-8 primary-color text-xl font-medium"
          >Speedtest</router-link
        >
        <a href="#footer-side" class="mr-8 primary-color text-xl font-medium"
          >Contacto</a
        >
      </nav>
      <div class="primary-bg h-12 w-36 text-white btn shadow-btn">LOGIN</div>
    </div>
  </div>
</template>
