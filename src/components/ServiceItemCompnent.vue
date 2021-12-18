<script setup>
const {serviceItem} = defineProps({
   serviceItem: Object
});

</script>

<template>
  <div class="flex items-center flex-col lg:mr-0 mr-16 md:m-none">
    <img :src="serviceItem.img" class="lg:w-24 w-16 mb-5" />
    <h2 class="text-2xl mb-5 font-medium">{{serviceItem.name}}</h2>
    <div class="primary-bg py-2 px-8 text-white  btn shadow-btn">
      Ver
    </div>
  </div>
</template>
