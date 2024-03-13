<!-- <template>
  <div>
    <h1>Kitob Olish va O'qish</h1>
    <div v-if="!isReading">
      <button @click="buyBook">Kitobni Sotib Olish</button>
    </div>
    <div v-else>
      <h2>Kitob Ochiq: {{ isOpenUntil }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isReading = ref(false);
const isOpenUntil = ref('');

const buyBook = () => {
  const bookPrice = 10; // Kitob narxi o'zgartirilishi mumkin
  const userBalance = 15; // Foydalanuvchi balansi o'zgartirilishi mumkin

  if (userBalance >= bookPrice) {
    const duration = prompt('Neça soat yoki kun o’qishni tanlang? (Masalan: "2 soat" yoki "3 kun")');
    if (duration) {
      isReading.value = true;
      const endDate = calculateEndDate(duration);
      isOpenUntil.value = `Today: ${new Date().toLocaleDateString()}, Bugungi kundan boshlab ${endDate}gacha kitob ochiq turadi`;
    } else {
      alert('Siz tanlagan muddatni kiritmadingiz!');
    }
  } else {
    alert('Kechirasiz, sizda yetarli mablag\' yo\'q!'); 
  }
};

const calculateEndDate = (duration) => {
  const currentDate = new Date();
  const parts = duration.split(' ');
  if (parts.length === 2) {
    const amount = parseInt(parts[0]);
    const unit = parts[1];

    if (unit === 'soat') {
      currentDate.setHours(currentDate.getHours() + amount);
    } else if (unit === 'kun') {
      currentDate.setDate(currentDate.getDate() + amount);
    }

    return currentDate.toLocaleString();
  } else {
    return 'Noto‘g‘ri format kiritildi';
  }
};
</script> -->






<!-- 

<template>
  <div>
    <h1>Kitob Olish va O'qish</h1>
    <div v-if="!isReading">
      <button @click="buyBook">Kitobni Sotib Olish</button>
    </div>
    <div v-else>
      <h2>Kitob Ochiq: {{ isOpenUntil }}</h2>
      <h3>Qoldi: {{ remainingTime }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isReading = ref(false);
const isOpenUntil = ref('');
const remainingTime = ref('');

let countdownInterval;

const buyBook = () => {
  const bookPrice = 10; // Kitob narxi o'zgartirilishi mumkin
  const userBalance = 15; // Foydalanuvchi balansi o'zgartirilishi mumkin

  if (userBalance >= bookPrice) {
    const duration = prompt('Neça soat yoki kun o’qishni tanlang? (Masalan: "2 soat" yoki "3 kun")');
    if (duration) {
      isReading.value = true;
      const endDate = calculateEndDate(duration);
      isOpenUntil.value = `Today: ${new Date().toLocaleDateString()}, Bugungi kundan boshlab ${endDate}gacha kitob ochiq turadi`;
      startCountdown(endDate);
    } else {
      alert('Siz tanlagan muddatni kiritmadingiz!');
    }
  } else {
    alert('Kechirasiz, sizda yetarli mablag\' yo\'q!');
  }
};

const calculateEndDate = (duration) => {
  const currentDate = new Date();
  const parts = duration.split(' ');
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
    const distance = endDate - now  ;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      remainingTime.value = `${hours} soat ${minutes} daqiqa ${seconds} sekund qoldi`;
    } else {
      clearInterval(countdownInterval);
      isReading.value = false;
      isOpenUntil.value = '';
      remainingTime.value = ''; 
    }
  }, 1000);
};
</script> -->
















<!-- 


<template>
  <div>
    <h1>Kitob Olish va O'qish</h1>
    <div v-if="!isReading">
      <button @click="buyBook">Kitobni Sotib Olish</button>
    </div>
    <div v-else>
      <h2>Kitobni O'qish Muddati: {{ remainingTime }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isReading = ref(false);
const remainingTime = ref('');

const buyBook = () => {
  const bookPrice = 10; // Kitob narxi o'zgartirilishi mumkin
  const userBalance = 15; // Foydalanuvchi balansi o'zgartirilishi mumkin

  if (userBalance >= bookPrice) {
    isReading.value = true;
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1); // 1 soat o'qish uchun
    startReadingCountdown(endDate);
  } else {
    alert('Kechirasiz, sizda yetarli mablag\' yo\'q!');
  }
};

const startReadingCountdown = (endDate) => {
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance > 0) {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      remainingTime.value = `${hours} soat ${minutes} daqiqa ${seconds} sekund qoldi`;
    } else {
      clearInterval(countdown);
      isReading.value = false;
      remainingTime.value = '';
    }
  }, 1000);
};
</script> -->

<template>
  <div>
    <h1>Kitob Olish va O'qish</h1>
    <div v-if="!isReading">
      <button @click="buyBook">Kitobni Sotib Olish</button>
    </div>
    <div v-else>
      <h2>Kitob Ochiq: {{ isOpenUntil }}</h2>
      <h3>Qoldi: {{ remainingTime }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isReading = ref(false);
const isOpenUntil = ref('');
const remainingTime = ref('');

let countdownInterval;

const buyBook = () => {
  const bookPrice = 10; // Kitob narxi o'zgartirilishi mumkin
  const userBalance = 15; // Foydalanuvchi balansi o'zgartirilishi mumkin

  if (userBalance >= bookPrice) {
    const duration = prompt('Neça soat yoki kun o’qishni tanlang? (Masalan: "2 soat" yoki "3 kun")');
    if (duration) {
      isReading.value = true;
      const endDate = calculateEndDate(duration);
      isOpenUntil.value = `Today: ${new Date().toLocaleDateString()}, Bugungi kundan boshlab ${endDate.toLocaleDateString()}gacha kitob ochiq turadi`;
      startCountdown(endDate);
    } else {
      alert('Siz tanlagan muddatni kiritmadingiz!');
    }
  } else {
    alert('Kechirasiz, sizda yetarli mablag\' yo\'q!');
  }
};

const calculateEndDate = (duration) => {
  const currentDate = new Date();
  const parts = duration.split(' ');
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
      remainingTime.value = `${hours} soat ${minutes} daqiqa ${seconds} sekund qoldi`;
    } else {
      clearInterval(countdownInterval);
      isReading.value = false;
      isOpenUntil.value = '';
      remainingTime.value = '';
    }
  }, 1000);
};
</script>
