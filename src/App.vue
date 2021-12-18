<script setup>
import useChat from '@/composables/useChat';
import { onMounted } from "vue";
const {init, config} = useChat();
 onMounted(()=> {
   init();
   config('standard');
 });
 
</script>

<template>
  <main>
    <router-view />
  </main>
</template>
