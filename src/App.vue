<template>
  <div>

    <div v-if="spins" class="spinner_uchun_still">
      <!-- <div class="spinner-border" style="width: 200px;height: 200px;">
      </div> -->

      <img src="../src/Images/book-49.gif" alt="">
    </div>
 
    <div v-else="spins">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <footer7 style="bottom: 0; position: relative;"/>
      <!-- <div id="top_f" class="container"><i class="fab fa-telegram"/></div> -->
    </div>



  </div>
</template>

<script setup>
import footer7 from "../src/components/footer.vue"
import { MDBSpinner } from "mdb-vue-ui-kit";
import { onMounted, ref, computed } from "vue";
import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;
let spins = ref(true);
let sp = onMounted(async () => {
 setInterval(() => {
    spins.value=false;
 }, 1500);
})

sp();





</script>

<style>
 

#top_f i{
   /* position: fixed ; */
   z-index: 2000 !important;
   bottom: -50px;
   width: 40px;
   height: 40px;
  
}
 
.fade-enter-active {
  transition: all 0.5s linear;
  transform: scale(1);
  filter: contrast(100%);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: contrast(0%);
}


.spinner_uchun_still {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100% !important;
   
  height: 100vh;
  font-size: 50px;
  gap: 20px;
  position: absolute;
  z-index: 789;
  backdrop-filter: brightness(80%);
  /* filter: brightness(50%); */
  /* backdrop-filter: brightness(50%); */
  /* filter: brightness(); */
}
</style>