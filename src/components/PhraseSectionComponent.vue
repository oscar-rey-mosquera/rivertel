<script setup>
   const {phraseDataSection} = defineProps({
     phraseDataSection: {
       type: Object,
       required : true
     }
   }) ;

</script>

<template>
  <div class="bodyPhraseSection" v-if="phraseDataSection.textSide == 'R'">
     <div class="flex-1 md:block hidden"><img :src='phraseDataSection.img'/></div>
     <div class="md:flex-1">
       <h1 class="font-medium text-xl mb-4 md:hidden block secondary-color">{{phraseDataSection.tittle}}</h1>
       <p class="md:text-2xl font-medium">{{phraseDataSection.phrase}}</p>
      </div>
  </div>

   <div class="bodyPhraseSection" v-else>
     <div class="md:flex-1">
       <h1 class="font-medium text-xl mb-4 md:hidden block secondary-color">{{phraseDataSection.tittle}}</h1>
       <p class="md:text-2xl font-medium">{{phraseDataSection.phrase}}</p>
      </div>
       <div class="flex-1 md:block hidden"><img :src='phraseDataSection.img'/></div>
  </div>

</template>