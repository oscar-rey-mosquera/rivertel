<script setup>
import MainTemplate from "@/components/MainTemplate.vue";
import CardNewComponent from "@/components/CardNewComponent.vue";
</script>

<template>
    <MainTemplate>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            <CardNewComponent />
            <CardNewComponent />
            <CardNewComponent />
            <CardNewComponent />
            <CardNewComponent />
            <CardNewComponent />
          </div>
     </MainTemplate>   
</template>