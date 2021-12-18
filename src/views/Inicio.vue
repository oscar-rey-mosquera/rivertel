<script setup>
import MainTemplate from "@/components/MainTemplate.vue";
import ServiceItemComponent from "@/components/ServiceItemCompnent.vue";
import { phraseDataSection, itemsDataService } from "@/data";
import PhraseSectionComponent from "@/components/PhraseSectionComponent.vue";
import CardNewComponent from "@/components/CardNewComponent.vue";
</script>

<template>
  <div>
    <MainTemplate>
      <div class="w-11/12 pt-7 m-auto">
        <div class="flex">
          <div class="lg:pt-36 pt-20 flex-1">
            <h1 class="md:text-7xl text-5xl font-semibold primary-color">
              Rivertel
            </h1>
            <h1
              class=" md:text-5xl text-3xl font-semibold secondary-color lg:mt-9 mt-5"
            >
              Telecominaciones
            </h1>
            <p class="md:text-2xl lg:mt-9 mt-5 font-medium">
              Rivertel crece igual como lo hace tu empresa
            </p>
            <div class="primary-bg h-12 w-36 text-white btn shadow-btn mt-9">
              LOGIN
            </div>
          </div>
          <div class="flex-1 pt-2 hidden lg:block">
            <img src="/img/g10.svg" class="block m-auto" />
          </div>
        </div>
        <div class="m-auto mt-24 text-center font-medium">
          <h1 class="mb-5 lg:text-5xl text-4xl primary-color">Servicios</h1>
          <div class="lg:w-2/3 m-auto mb-20">
            <p>
              Rivertel ofrece muchos servicos y benificios para cualquier
              entorno porque la sonriza de un cliente es el mejor activo para
              nosostros
            </p>
          </div>
          <div class="w-11/12 m-auto overflow-x-auto flex justify-between">
            <ServiceItemComponent
              v-for="service in itemsDataService"
              :key="service"
              :serviceItem="service"
            />
          </div>
        </div>
        <PhraseSectionComponent
          v-for="phraseSection in phraseDataSection"
          :key="phraseSection"
          :phraseDataSection="phraseSection"
        />

        <div class="mt-24">
          <h1 class="lg:text-5xl text-4xl primary-color text-center">
            Noticias
          </h1>
          <div class="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            <CardNewComponent />
            <CardNewComponent />
            <CardNewComponent />
          </div>
          <router-link :to="{name: 'about'}" class="text-center block mt-6 text-lg font-medium">Ver mas</router-link>
        </div>
      </div>
    </MainTemplate>
  </div>
</template>
