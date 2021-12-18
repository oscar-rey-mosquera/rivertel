<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import UploadFileComponent from "@/components/UploadFileComponent.vue";
import supabase from '@/services/supabase';
import { router } from "@/routes";

const news = ref({ tittle: "", url_image: "", news_summary: "", content: "" });
const route = useRoute();
let editor = null;

onMounted(() => {
 editor = CKEDITOR.replace("editor");
 getNews(route.params.id);
 
});

const getNews = async (id) => {
   if(id){
     const {data} = await supabase.getOneNews(id);
      news.value = {...news.value, ...data[0]};
      editor.setData(data[0].content);
   }
}

const createNews = async (e) => {
  const newsData = {
    tittle: news.value.tittle,
    url_image: news.value.url_image,
    news_summary: news.value.news_summary,
    content: editor.getData(),
  };
  const {data} = await supabase.createNews(newsData);

  data ? router.push({name: 'admin-news'}) : alert('Error intentalo mas tarde')

  
}

</script>

<template>
  <div>
    <div class="relative bg-white w-11/12 m-auto top-0 p-5">
      <h1 class="mb-5">Crear o editart noticia</h1>
      <form action="#" @submit.prevent="createNews">
      <input type="text" class="w-full" name="Titulo" placeholder="Titulo" v-model="news.tittle" required />
      <input
        type="url"
        class="mt-4 w-full"
        placeholder="Url de imagen principal"
        v-model="news.url_image"
        required
      />
      <textarea placeholder="Resumen de noticia" class="w-full mt-5" v-model="news.news_summary"></textarea>

      <textarea id="editor" class="w-full"></textarea>
      <div class="flex justify-between">
        <router-link :to="{ name: 'admin-news' }">
          <button type="button" class="primary-bg py-2 px-8 text-white btn shadow-btn mt-3">
            Cancelar
          </button></router-link>
        <div class="flex">
          <UploadFileComponent />
          <button class="secondary-bg py-2 px-8 text-white btn shadow-btn mt-3">
            Publicar
          </button>
        </div>
      </div>
      </form>
    </div>
  </div>
</template>
