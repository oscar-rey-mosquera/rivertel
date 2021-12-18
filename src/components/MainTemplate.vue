<script setup>
import NavComponent from "@/components/NavComponent.vue";
</script>

<template>
  <div>
    <div class="w-11/12 pt-7 m-auto min-h-screen">
      <NavComponent />
      <slot></slot>
    </div>
    <div class="mt-28 primary-bg tertiary-bg pt-20 pb-2" id="footer-side">
      <div class="w-8/12 m-auto grid lg:grid-cols-3 md:grid-cols-2">
        <div>
          <h1 class="secondary-color text-xl">Contenido</h1>
          <ul class="mt-10">
            <li class="mb-4">¿Quienes somos?</li>
            <li class="mb-4">Noticias</li>
            <li class="mb-4">Planes</li>
          </ul>
        </div>
        <div>
          <h1 class="secondary-color text-xl">Contacto</h1>
          <ul class="mt-10">
            <li class="mb-4">Telefono: 32145789</li>
            <li class="mb-4">Email: riverltel@gmail.com</li>
            <li class="mb-4">
              <div class="flex">
                <img src="/img/instagram.svg" class="w-4 mr-3" />
                <img src="/img/facebook.svg" class="w-4 mr-3" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center mt-10">@ Rivertel SA 2021</p>
    </div>
  </div>
</template>
