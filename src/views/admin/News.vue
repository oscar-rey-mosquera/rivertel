<script setup>
import { onMounted, ref } from 'vue';
import supabase from '@/services/supabase';

const newsData = ref([]);

onMounted(async () => {
     const {data} = await supabase.getNews();

     newsData.value = data;
});

const deleteNews = async (id) => {
     const {data, error} = await supabase.deleteNew(id);
     
    if(data) {
      newsData.value = newsData.value.filter(news => {
      return data[0].id != news.id;
    });
    }else {
      alert(error.message);
    }
     
}

</script>


<template>

  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          shadow-lg
          rounded
          bg-white
        "
      >
       <router-link :to="{name: 'admin-news-create' }"> <div class="secondary-bg py-2 px-8 text-white btn shadow-btn">Crear</div></router-link>
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-lg text-blueGray-700">Noticias</h3>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <!-- Projects table -->
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-blueGray-50
                    text-blueGray-500
                    border-blueGray-100
                  "
                >
                  Titulo
                </th>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-blueGray-50
                    text-blueGray-500
                    border-blueGray-100
                  "
                >
                  Resumen
                </th>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-blueGray-50
                    text-blueGray-500
                    border-blueGray-100
                  "
                >
                  ...
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="news in newsData" :key="news.id">
                <td class="text-sm">{{news.tittle}}</td>
                <td class="text-sm">{{news.news_summary}}</td>
                <td class="text-sm">
                  <router-link :to="{name : 'admin-news-edit', params: {id: news.id}}">Edital</router-link>
                  <a @click.prevent="deleteNews(news.id)">Eliminar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
