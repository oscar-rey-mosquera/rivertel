<script setup>
import MainTemplate from "@/components/MainTemplate.vue";
import PlansCardComponent from "@/components/PlansCardComponent.vue";
</script>

<template>
  <MainTemplate>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      <PlansCardComponent />
      <PlansCardComponent />
      <PlansCardComponent />
    </div>
  </MainTemplate>
</template>
