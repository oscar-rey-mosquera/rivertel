<script setup>
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>
<template>
  <div id="root">
    <div class="relative md:ml-64 bg-blueGray-50">
      <SidebarComponent />
      <!-- Header -->
      <div class="relative primary-bg md:pt-32 pb-16 pt-12"></div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
      </div>
    </div>
  </div>
</template>
