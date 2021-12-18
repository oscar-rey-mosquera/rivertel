<script setup>
import supabase from '@/services/supabase';
import {ref, onMounted} from 'vue';
const hiddenForm = ref(false);
let imagesData = ref([]);
let loading = ref(false);

onMounted( async () => {
   getImageData();
})


const getImageData = async () => {
       const data = await supabase.getlistFile('news');
       imagesData.value = data;
      loading.value = true;
}


/**
 * @param {Event} e
 */
const uploadImage = async (e) => {
   try {
      const image = await supabase.UploadFile('news', e.target.files[0]);
       getImageData();
   } catch (error) {
       alert(error);
   }
   
}


/**
 * @param {string} imageName nombre de imagen
 */
const deleteImage = async (imageName) => {
    const data = await supabase.deleteFile('news', imageName);

   imagesData.value =  imagesData.value.filter(image => data[0].name != image.name);
}

const copiar = async (url) => {
   await navigator.clipboard.writeText(url);
   alert('imagen copiada');
}

</script>


<template>
     <div class="fixed p-4 top-0 w-3/5 bg-white h-screen m-auto right-0 left-0 z-10 overflow-y-auto" v-show="hiddenForm">
       <p class="mb-2 float-right cursor-pointer" @click="hiddenForm = false" >Cerrar</p>
       <h1 class="text-2xl mb-5">Subir imagen</h1>
       <form action="#">
           <input type="file" @change="uploadImage">
       </form>
      <div class="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-2" v-if="loading">
       <div v-for="image in imagesData" :key="image.id" class="relative">
         <img :src="image.url"/>
        <div class="flex"> 
            <div class="mr-5 cursor-pointer" @click="deleteImage(image.name)">eliminar</div> 
            <div class="mr-5 cursor-pointer" @click="copiar(image.url)">Copiar url</div></div>
        </div>
      </div>

      <p v-else>Cargando...</p>

     </div>

     <button type="button" class="mr-2 secondary-bg py-2 px-8 text-white btn shadow-btn mt-3" @click="hiddenForm = true">Upload imagen</button> 
</template>