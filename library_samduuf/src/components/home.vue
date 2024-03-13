<template>
  <div class="">

    <div class="top_nav">
      <nav7></nav7>
    </div>
    <div class="libry  d-flex justify-content-between border h6">
    </div>

    <div class="  container p-0 w-100  text-center d-flex mb-5" style="  z-index: -1 !important;">
      <!-- <div class="kitob1">kitob1</div> -->
      <div class="w-50 mt-5 ">
        <img src="../Images/logo2.jpg" alt="aa" class=" lib_on_images">
      </div>
      <div class="w-50 carusel_naive">
        <n-carousel class="carusel_naive_img" :slides-per-view="1" :space-between="0" :loop="true" draggable>
          <div class="carousel-img w-100 h-100" v-for="tb_book in books_list" :key="tb_book.id">
            <img :src="tb_book.img" class="w-100 h-100">
          </div>
        </n-carousel>
      </div>
    </div>


    <!-- carusel play market still -->
    <div class="container pt-5">
      <div v-for="x in [1]" style="margin-bottom: 150px;">
        <div class="books_carusel_name">
          <b>Books is Uzbek</b>
        </div>
        <n-carousel class="naive_ui_play_img" :slides-per-view="5" :space-between="20" :loop="true" draggable
          show-arrow>
          <div class="carousel-img  carousel_img_father" v-for="book in books_list" ::key="book.id">
            <div class="carousel-img-before">
              <mark class="fr_pr" :style="book.fr_pr == 'Free' ? 'background:green' : 'background: linear-gradient(to right, rgb(151, 73, 224), rgb(205, 133, 133), rgb(137, 43, 226)); '"><i v-if="book.fr_pr=='Pro'" class="fas fa-gem me-2" /> {{ book.fr_pr}}</mark>
              <span class="check_span" :style="book.check_anm"><i class="fa fa-check" /> Accepted</span>
              <p class="d-flex carusel_icons w-100 p-0">
                <i class="fas fa-heart" :aria-label="book.like" />
                <i class="fas fa-download" :aria-label="book.down" />
                <i class="fas fa-eye" :aria-label="book.eye_val" />
                <i class="fas fa-plus" @click="check_book_function(book.id)" />
              </p>  
              <p>
                <button class="btn bg-warning" @click="info_books(book.id)">More Info</button>
              </p>
            </div>
            <img class="w-100 h-100" style="object-fit: cover;" :src="book.img">
          </div>
        </n-carousel>
      </div>

    </div>
 

  </div>
</template>

<script setup>
import nav7 from "../components/navi.vue";
// import Footer from "../components/footer.vue"
import { k } from "../../src/backend.js"
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router';
let router = useRouter()
let premium_value = ref(false);
let check_span_stills = ref("")
let check_span_stills_booln = ref(false);

let info_books =(async(info_id)=>{
  router.push({path:`/info/book/${info_id}`})
})
let books_list = ref([
  { "id": 0, "like": 120, "check_anm": "", "down": 111, "eye_val": 786, "fr_pr": "Free", "img": new URL("../Images/img1.jpg", import.meta.url) },
  { "id": 1, "like": 700, "check_anm": "", "down": 154, "eye_val": 900, "fr_pr": "Pro", "img": new URL("../Images/img2.jpg", import.meta.url) },
  { "id": 2, "like": 820, "check_anm": "", "down": 705, "eye_val": 600, "fr_pr": "Free", "img": new URL("../Images/img3.jpg", import.meta.url) },
  { "id": 3, "like": 520, "check_anm": "", "down": 987, "eye_val": 850, "fr_pr": "Pro", "img": new URL("../Images/img7.jpg", import.meta.url) },
  { "id": 4, "like": 510, "check_anm": "", "down": 549, "eye_val": 961, "fr_pr": "Free", "img": new URL("../Images/img5.jpg", import.meta.url) },
  { "id": 5, "like": 777, "check_anm": "", "down": 710, "eye_val": 888, "fr_pr": "Pro", "img": new URL("../Images/img6.jpg", import.meta.url) },
  { "id": 6, "like": 888, "check_anm": "", "down": 100, "eye_val": 1250, "fr_pr": "Free", "img": new URL("../Images/img4.jpg", import.meta.url) },
  { "id": 7, "like": 999, "check_anm": "", "down": 542, "eye_val": 892, "fr_pr": "Free", "img": new URL("../Images/img8.jpg", import.meta.url) },
  { "id": 8, "like": 111, "check_anm": "", "down": 800, "eye_val": 1284, "fr_pr": "Pro", "img": new URL("../Images/img9.jpg", import.meta.url) }
])

const book_cheks_list = ref([])
let check_values_mx= ref(false)
const check_book_function = (async (books_idmx) => {
  book_cheks_list.value.push(books_list.value[books_idmx])
  books_list.value[books_idmx].check_anm = "display:block;"
  
})


let times = setInterval(() => {

}, 1500);


</script>

<style scoped>
/* .naive_ui_play_img .carousel_img_father{transition: ease 2s;} */
 
 

.libry {
  background: url("../Images/f1.jpg") no-repeat;
  height: 650px;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  filter: brightness(40%);
}

.lib_on_images {
  width: 600px;
  height: 450px;
  object-fit: cover;
  animation: lib_on_images7 linear 4s infinite;

}

@keyframes lib_on_images7 {
  0% {
    transform: translateY(20px) translateX(10px);
  }

  25% {
    transform: translateY(0px) translateX(0px);
  }

  100% {
    transform: translateY(20px) translateX(10px)
  }
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.kitob1 {
  width: 15%;
  height: 120px;
  border: solid;
  transform: rotateY(60deg) skew(15deg) rotateZ(-5deg);
  position: relative;
}

.kitob1::before,
.kitob1::after {
  content: "";
  position: absolute;
  height: 105%;
  width: 25%;
  border: solid;
}

.kitob1::before {
  transform: translate(-48px) translateY(-3px);
  border-bottom-left-radius: 10px !important;
}

.kitob1::after {
  transform: translate(-48px) rotate(97deg) translateX(-66px) rotateY(70deg) skew(20deg);
  border: none;
}

.top_nav {
  /* background: linear-gradient(to right, rgb(46, 49, 50), rgb(56, 58, 61)); */
  z-index: 100000000000 !important;
  /* position: sticky !important; */
  top: -65px !important;
  margin-top: 5px;
}
</style>