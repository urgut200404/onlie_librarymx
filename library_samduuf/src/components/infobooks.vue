<template>
  <div>
    <Nav />

    <div class="container p-0 pt-5" id="top7">
      <div class="row ">
        <div class="col-9 border-end  d-flex">
          <div class="card pt-4" v-for="item in books_list[$route.params.id]" :key="item.id"
            :style="item.fr_pr == 'Pro' ? lock_pro : 'display:flex;'">
            <img :src="item.img" class="w-75" alt="Fissure in Sandstone" />
            <div class="down" v-show="item.fr_pr == 'Free'">
              <a href="../Images/avatar.png" class="btn btn_down " download="../Images/avatar.png" target="__blank"><i
                  class="fas fa-download" /> Download</a>
            </div>
            <div v-show="item.fr_pr == 'Pro'" class="btn_pro_div">
              <button class="btn btn_pro" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"><i class="fab fa-telegram " /> Read Now</button>
            </div>
            <i class="fas fa-lock" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight" :style="item.fr_pr == 'Pro' ? 'display:flex;' : 'display:none;'" />

          </div>
          <div class=" ps-5" style="width: 65%;">
            <ul class="h-100">
              <li><span class="w-30">Type:</span> <span class="w-50"><i
                    v-if="books_list[$route.params.id][0].fr_pr == 'Pro'" class="fas fa-gem text-danger" /> {{
            books_list[$route.params.id][0].fr_pr }}</span>
              </li>
              <li><span class="w-30">Author:</span> <span class="w-50">Muxammadali</span></li>
              <li><span class="w-30">Lang: </span> <span class="w-50">uzb</span></li>
              <li><span class="w-30">Writing:</span> <span class="w-50">Lorem ipsum </span></li>
              <li><span class="w-30">Resource type:</span> <span class="w-50">criatev</span></li>
              <li><span class="w-30">Number of pages:</span> <span class="w-50">120</span></li>
              <li><span class="w-30"> Publishing:</span> <span class="w-50">Samarkand</span></li>
              <li><span class="w-30">Number:</span> <span class="w-50">7</span></li>
              <li><span class="w-30">Year of publication:</span> <span class="w-50">1985</span></li>
              <li><span class="w-30">Published:</span> <span class="w-50">Samarkand </span></li>
            </ul>
          </div>

        </div>

        <div class="col-3">
          <div class="note note-warning w-100">
            <button class="btn btn-" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"><i class="fab fa-telegram " /> Read Now</button>
          </div>



          <div class="offcanvas offcanvas-top h-100" tabindex="-1" id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div class="container">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <!-- lambda(x:=> ...) -->
                <div class="note note-light   w-100" style="height:600px;">
                  <b>Maqul holda kitobni o'qing </b>

                  <p><span class=""><i class="fas fa-user " /> {{ usermoney_token }} $</span></p>
                  <p><span class=""><i class="fas fa-book " /> {{ bookmoney_token }} $</span></p>
                  <p>
                    {{ qabulQilinganList }}
                    <button class="btn note note-light btn-outline-secondary text-dark" value="sale_b"
                      :style="by_book == 'buy' ? activemx : ''" @click="by_book = 'buy'" type="button"><i
                        class="fas fa-shop" />
                      Kitobni Sotib olish</button>
                    <button class="btn note note-light btn-outline-secondary text-dark" value="sale_k"
                      :style="by_book == 'kridets' ? activemx : ''" @click="by_book = 'kridets'" type="button"><i
                        class="far fa-hourglass" /> Malum vaqt o'qish</button>
                    <button class="btn note-light btn-outline-secondary  text-dark" value="sale_br" type="button" ac
                      :style="by_book == 'shop' ? activemx : ''" @click="by_book = 'shop'">Buyrutma berish</button>
                  </p>

                  <div>
                    <div action="" v-if="by_book == 'buy'">
                      {{ day_mn_y }} buy

                    </div>
                    <div action="" v-if="by_book == 'kridets'">

                      <form class="form-control w-50 pt-3">
                        <h5 class="text-center">Malum vaqt kitobni oqish</h5>
                        <label for="txp">Soat Yoki Kun</label>
                        <input type="text" id="txp" class="form-control " v-model="input_value7"
                          placeholder="2-soat yoki 2-kun tarzda kiriting...">
                        <p class="mt-5 d-flex justify-content-between">
                          <button class="btn note-warning btn-outline-warning" value="sale_br" type="button"
                            @click="buyBook"><i class="fas fa-repeat" /> Render</button>
                          <button class="btn note-success btn-outline-success" :disabled="qabulVal_disabled"
                            value="sale_br" type="button" @click="qabul_qilish">Qabul
                            qilish</button>
                        </p>
                        <b><i class="fas fa-user" /> $: {{ usermoney_token }}</b><br>
                        <b><i class="fas fa-book" /> $: 120</b><br>
                        <b><i class="far fa-calendar-check" /> Today: {{ day_mn_y }}</b><br>
                        <b><i class="fas fa-clock" /> Limit : {{ input_value7 }}</b><br>
                        <b><i class="far fa-hourglass" /> Srok book: <span class="mark ">{{ isOpenUntil.toLocaleString()
                            }}</span></b><br>
                        <b><i class="far fa-hourglass" /> Srok book: <span class="mark ">{{ remainingTime }}</span></b>

                      </form>


                    </div>


                    <div action="" v-if="by_book == 'shop'">
                      <form class="form-control p-2 w-50 ">
                        <!-- Name input -->
                        <div data-mdb-input-init class="form-outline mb-4">
                          <input type="text" id="form4Example1" class="form-control border" />
                          <label class="form-label" for="form4Example1">Name</label>
                        </div>

                        <!-- Email input -->
                        <div data-mdb-input-init class="form-outline mb-4">
                          <input type="email" id="form4Example2" class="form-control border" />
                          <label class="form-label" for="form4Example2">Email address</label>
                        </div>

                        <!-- Message input -->
                        <div data-mdb-input-init class="form-outline mb-4">
                          <textarea class="form-control border" id="form4Example3" rows="4"></textarea>
                          <label class="form-label" for="form4Example3">Message</label>
                        </div>

                        <!-- Checkbox -->
                        <div class="form-check d-flex justify-content-center mb-4">
                          <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                          <label class="form-check-label" for="form4Example4">
                            Send me a copy of this message
                          </label>
                        </div>

                        <!-- Submit button -->
                        <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Send</button>
                      </form>
                    </div>
                  </div>
                  <input type="datetime-local" name="" id=" " class="form-control w-50" placeholder="12.12.2004 20:20">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-5 mt-5">
        <!-- OPen book  -->
        <div class="container note note-light " style="height: 600px;">
          <div class="d-flex w-100">
            <div class="w-50 border">
              <n-carousel class="w-75" :slides-per-view="3" :space-between="1" :loop="true" draggable show-arrow
                auto-arrrow>
                <div class="carousel-img  carousel_img_father" v-for="book in books_list2" ::key="book.id">
                  <img class="w-75 h-75" style="object-fit: cover;" :src="book.img">
                </div>
              </n-carousel>
            </div>
            <div class="w-50 border">
              <h3 class="text-center pt-4" style="font-weight: 700; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Open This book</h3>
                <div v-for="kitobmx in kitob_ochiq" :key="kitobmx.id">
                  {{ kitobmx }}
                </div>
              <!-- {{ kitob_ochiq }} -->
            </div>
          </div>
          <!-- Open book endblock -->

        </div>


        <div v-for="x in [1]" style="margin-bottom: 150px;">
          <div class="books_carusel_name">
            <b>This is Books</b>
          </div>
          <n-carousel class="naive_ui_play_img" :slides-per-view="5" :space-between="15" :loop="true" draggable
            show-arrow auto-arrrow>
            <div class="carousel-img  carousel_img_father" v-for="book in books_list2" ::key="book.id">
              <div class="carousel-img-before">
                <mark class="fr_pr"
                  :style="book.fr_pr == 'Free' ? 'background:green' : 'background: linear-gradient(to right, rgb(151, 73, 224), rgb(205, 133, 133), rgb(137, 43, 226)); '">{{
            book.fr_pr
          }}</mark>
                <span class="check_span" :style="book.check_anm"><i class="fa fa-check" /> Accepted</span>
                <p class="d-flex carusel_icons w-100 p-0">
                  <!-- <i class="fas fa-heart" :aria-label="book.like" /> -->
                  <i class="fas fa-download" :aria-label="book.down" />
                  <i class="fas fa-eye" :aria-label="book.eye_val" />
                  <i class="fas fa-plus" @click="check_book_function(book.id)" />
                </p>
                <p>
                  <a href="#top7" class="text-decoration-none text-light"><button class="btn bg-warning"
                      @click="info_books(book.id)">More INfo</button></a>

                </p>
              </div>
              <img class="w-100 h-100" style="object-fit: cover;" :src="book.img">
            </div>
          </n-carousel>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import Nav from "../components/navi.vue";
import { useRouter, useRoute } from "vue-router";

let kitob_ochiq = ref([])
let lock_pro = ref(`position: relative;filter: brightness(50%);`)
let day_mn_y = ref();
let router = useRouter();
let route = useRoute()
let by_book = ref("buy");
let qabulVal_disabled = ref(true)
const isReading = ref(false);
const isOpenUntil = ref('');
const remainingTime = ref('')
let dbtime = ref('')
let server7777 = ref()
let countdownInterval;
let qabulQilinganList = ref([])
let activemx = ref("background: linear-gradient(to right, rgba(151, 73, 224, 0.795), rgba(205, 133, 133, 0.301), rgba(137, 43, 226, 0.8));")
let info_books = (async (info_id) => {
  router.push({ path: `/info/book/${info_id}` })
});

let input_value7 = ref();
let usermoney_token = ref(localStorage.getItem("usermoney"));
let bookmoney_token = ref(120);

let day_mn_yFun = (async () => {
  let date = new Date()
  day_mn_y.value = `${date.toLocaleString()}`

});

setInterval(() => {
  day_mn_yFun()

}, 100);


let books_list = ref([
  [{ "id": 0, "like": 120, "check_anm": "", "down": 111, "eye_val": 786, "fr_pr": "Free", "premiumVal": null, "img": new URL("../Images/img1.jpg", import.meta.url) }],
  [{ "id": 1, "like": 700, "check_anm": "", "down": 154, "eye_val": 900, "fr_pr": "Pro", "premiumVal": false, "img": new URL("../Images/img2.jpg", import.meta.url) }],
  [{ "id": 2, "like": 820, "check_anm": "", "down": 705, "eye_val": 600, "fr_pr": "Free", "premiumVal": null, "img": new URL("../Images/img3.jpg", import.meta.url) }],
  [{ "id": 3, "like": 520, "check_anm": "", "down": 987, "eye_val": 850, "fr_pr": "Pro", "premiumVal": false, "img": new URL("../Images/img7.jpg", import.meta.url) }],
  [{ "id": 4, "like": 510, "check_anm": "", "down": 549, "eye_val": 961, "fr_pr": "Free", "premiumVal": null, "img": new URL("../Images/img5.jpg", import.meta.url) }],
  [{ "id": 5, "like": 777, "check_anm": "", "down": 710, "eye_val": 888, "fr_pr": "Pro", "premiumVal": false, "img": new URL("../Images/img6.jpg", import.meta.url) }],
  [{ "id": 6, "like": 888, "check_anm": "", "down": 100, "eye_val": 1250, "fr_pr": "Free", "premiumVal": null, "img": new URL("../Images/img4.jpg", import.meta.url) }],
  [{ "id": 7, "like": 999, "check_anm": "", "down": 542, "eye_val": 892, "fr_pr": "Free", "premiumVal": null, "img": new URL("../Images/img8.jpg", import.meta.url) }],
  [{ "id": 8, "like": 111, "check_anm": "", "down": 800, "eye_val": 1284, "fr_pr": "Pro", "premiumVal": false, "img": new URL("../Images/img9.jpg", import.meta.url) }]
])


let books_list2 = ref([
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


watchEffect(async () => {

  let premiumFunction = (async () => {
    let server = JSON.parse(localStorage.getItem("qabulList"))
    try {
      server7777.value = server.find((item) => item.id == books_list.value[route.params.id][0].id)
      if (server7777) {
        console.log(server7777.value);
        books_list.value[server7777.value.id][0].premiumVal = server7777.value.premium
        kitob_ochiq.value.push(server7777)
      }
    } catch (error) {
      console.log("xato");
    }
  })

  premiumFunction()
})


let qabul_qilish = (async () => {
  if (input_value7.value == null) {
    alert("Malumotlarni to'liq kiriting !!!")
  }
  else if (input_value7.value) {
    // input_value7.value =JSON.parse( localStorage.getItem("qabulList"))
    qabulQilinganList.value.splice(qabulQilinganList.value.length, qabulQilinganList.value.length - 1,
      {
        "id": route.params.id,
        "premium": true,
        "limet_book": input_value7.value,
        "srokTime": JSON.parse(localStorage.getItem("srok_book")),
        "userBalance": (JSON.parse(localStorage.getItem("usermoney"))) - 120
      })

    localStorage.setItem("usermoney", (JSON.parse(localStorage.getItem("usermoney"))) - 120)
    // let form = document.querySelectorAll("form");
    // console.log(form);
    localStorage.setItem("qabulList", JSON.stringify(qabulQilinganList.value))
  }
})



const buyBook = () => {
  const bookPrice = 10; // Kitob narxi o'zgartirilishi mumkin
  const userBalance = usermoney_token.value; // Foydalanuvchi balansi o'zgartirilishi mumkin

  if (userBalance >= bookPrice) {
    const duration = input_value7.value;
    if (duration) {
      isReading.value = true;
      const endDate = calculateEndDate(duration);
      localStorage.setItem("srok_book", JSON.stringify(endDate.toLocaleString()))
      isOpenUntil.value = `${JSON.parse(localStorage.getItem("srok_book"))}`;
      startCountdown(endDate);
      qabulVal_disabled.value = false
    } else {
      alert('Siz tanlagan muddatni kiritmadingiz!');
    }
  } else {
    alert('Kechirasiz, sizda yetarli mablag\' yo\'q!');
  }
};

let boshqa = (() => {
  setInterval(() => {
    if (localStorage.getItem("srok_book")) {
      // isOpenUntil.value = (JSON.parse(localStorage.getItem("srok_book")));
    }
  }, 1000);


  // startCountdown(calculateEndDate(JSON.parse(localStorage.getItem("srok_book"))));
})

boshqa()

const calculateEndDate = (duration) => {
  const currentDate = new Date();
  const parts = duration.split('-');
  if (parts.length === 2) {
    const amount = parseInt(parts[0]);
    const unit = parts[1];

    if (unit === 'soat') {
      currentDate.setHours(currentDate.getHours() + amount);
    } else if (unit === 'kun') {
      currentDate.setDate(currentDate.getDate() + amount);
    }

    return currentDate;
  } else {
    return null;
  }
};

const startCountdown = (endDate) => {
  countdownInterval = setInterval(() => {
    const now = new Date();
    const distance = endDate - now;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      remainingTime.value = `${hours} : ${minutes} : ${seconds}`;
    } else {
      clearInterval(countdownInterval);
      isReading.value = false;
      isOpenUntil.value = '';
      remainingTime.value = '';
    }
  }, 1000);
};

// const buyBook = () => {
//   by_book.value = "kridets"
//   const bookPrice = 10; // Kitob narxi o'zgartirilishi mumkin
//   const userBalance = usermoney_token.value; // Foydalanuvchi balansi o'zgartirilishi mumkin

//   if (userBalance >= bookPrice) {
//     const duration = input_value7.value;
//     if (duration) {
//       isReading.value = true;
//       const endDate = calculateEndDate(duration);
//       isOpenUntil.value = `${endDate}`;
//       startCountdown(endDate);
//     } else {
//       alert('Siz tanlagan muddatni kiritmadingiz!');
//     }
//   } else {
//     alert('Kechirasiz, sizda yetarli mablag\' yo\'q!');
//   }
// };




// const calculateEndDate = (duration) => {
//   const currentDate = new Date();
//   const parts = duration.split('-');
//   if (parts.length === 2) {
//     const amount = parseInt(parts[0]);
//     const unit = parts[1];

//     if (unit === 'soat') {
//       currentDate.setHours(currentDate.getHours() + amount);
//     } else if (unit === 'kun') {
//       currentDate.setDate(currentDate.getDate() + amount);
//     }

//     return currentDate.toLocaleString();
//   } else {
//     return 'Noto‘g‘ri format kiritildi';
//   }
// };



// const startCountdown = (endDate) => {
//   countdownInterval = setInterval(() => {
//     const now = new Date();
//     const distance = endDate - now;

//     if (distance > 0) {
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//       remainingTime.value = `${hours} soat ${minutes} daqiqa ${seconds} sekund qoldi`;
//     } else {
//       clearInterval(countdownInterval);
//       isOpenUntil.value = '';
//       remainingTime.value = '';
//     }
//   }, 1000);
// };

</script>

<style scoped>
.offcanvas {}

.text-dark {

  /* background: linear-gradient(to right, rgba(127, 126, 127, 0.795), rgba(210, 210, 208, 0.836)); */
  background: none;
  box-shadow: 0 0 5px rgb(216, 107, 246) !important;
  text-transform: capitalize;
  /* border-radius: 0 0 10px 10px; */
  border-bottom: solid 1px !important;
  font-weight: 700;
  font-size: 13px;
  /* color: #252222 !important; */

}

form {
  background: ra(201, 200, 202, 0.378);
}

gb form input,
textarea {
  background: #fff !important;
}

form [type="checkbox"] {
  background: rgb(108, 108, 109) !important;
  color: red !important;
}

.w-30 {
  width: 30%;
}

ul {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

ul li {
  list-style: circle;
  font-weight: 700;
  /* position: relative; */
  display: flex;
  align-items: center;
  background: linear-gradient(to right, rgb(212, 204, 216) 30%, rgb(234, 227, 238) 20%, rgb(228, 223, 232)) 50%;
  padding: 5px 10px;
}


ul li::before {
  left: -2%;
  position: absolute;
  content: "";
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: rgb(209, 189, 227);
}

ul li:hover,
ul li:hover::after {
  background: rgb(213, 186, 237);
}

ul li::after {
  left: 4%;
  z-index: -1;
  position: absolute;
  content: "";
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
  /* background: rgb(237, 229, 244); */
  background: rgb(212, 204, 216);
}

ul li:hover::before {
  background: rgba(137, 43, 226, 0.881);
}

ul::before {
  left: -0.65%;
  position: absolute;
  content: "";
  width: 2px;
  height: 100%;

  background: rgba(137, 43, 226, 0.121);

}

.card {

  filter: drop-shadow(0 0 50px rgba(137, 43, 226, 0.184));
  display: flex;
  align-items: center;
  width: 35%;
  height: 500px;
  justify-content: space-between;
  padding-bottom: 20px;


}

.fa-lock {
  position: absolute;
  font-size: 8em;
  top: 50%;
  /* color: #9d62ea;  */
  background: linear-gradient(to right, rgb(151, 73, 224), rgb(205, 133, 133), rgb(137, 43, 226));
  /* background: linear-gradient(to right, rgb(158, 80, 200), rgb(127, 64, 215), rgb(158, 80, 200));  */
  color: transparent;
  -webkit-background-clip: text;
  /* text-shadow: 0 0 1px #e5e4e4; */
  cursor: pointer !important;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
}

.card img {
  height: 400px;
  object-fit: cover;
}

.btn_down,
.btn_pro {
  width: 170px;
  border: solid 1px #bcb9b9;
  border-radius: 5px;
  height: 35px;
  background: rgb(235, 222, 248);
}
</style>






<!-- 
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div> -->