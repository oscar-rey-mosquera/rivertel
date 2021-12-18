<script setup>
import { ref } from "vue";
import { useField } from 'vee-validate';
import * as yup from 'yup';
import supabase from "@/services/supabase";
     

const { errorMessage, value } = useField('email', yup.string().required('Campo email requerido').email('Formato de email incorrecto').label('The email'));

const login = async () => {
  console.log(value)
 if(!errorMessage.value && value.value) await supabase.LoginUserWithLink(value.value)
 else alert('Error en validacion de formulario');

};
</script>

<template>
  <div class="mx-auto px-4 mt-11">
    <div class="flex content-center items-center justify-center">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            w-full
            mb-6
            shadow-lg
            rounded-lg
            bg-gray-200
            border-0
            py-10
          "
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-sm font-bold text-gray-500">Login</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-400 text-center mb-3 font-bold">
              <small>Has login con tus credenciales</small>
            </div>
            <form @submit.prevent="login">
              <div class="relative w-full mb-3">
                <label
                  class="
                    block
                    uppercase
                    text-blueGray-600 text-xs
                    font-bold
                    mb-2
                  "
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="text"
                  class="
                    border-0
                    px-3
                    py-3
                    placeholder-blueGray-300
                    text-blueGray-600
                    bg-white
                    rounded
                    text-sm
                    shadow
                    focus:outline-none focus:ring
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  name="email"
                  
                  placeholder="Email"
                  v-model="value"
                />

              <p class="text-red-600 mt-2"> {{errorMessage}}</p>

              </div>

              <div class="text-center mt-6">
                <button
                  class="
                    primary-bg
                    text-white
                    active:bg-blueGray-600
                    text-sm
                    font-bold
                    uppercase
                    px-6
                    py-3
                    rounded
                    shadow
                    hover:shadow-lg
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    w-full
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a href="javascript:void(0)" class="text-blueGray-200">
              <small>Forgot password?</small>
            </a>
          </div>
          <div class="w-1/2 text-right">
            <router-link to="/auth/register" class="text-blueGray-200">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
