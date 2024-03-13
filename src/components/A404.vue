<!-- <template >
    <div>
        <h1>404 ERROR</h1>
    </div>
</template>

<script setup> 
</script>
 
<style scoped>
h1{
    color: tomato !important;       
}
</style> -->




<template>
    <div id="app">
      <div v-for="item in visibleItems" :key="item" class="item">
        {{ item }}
      </div>
      <div v-if="isLoading" class="loading">Yuklanmoqda...</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  
  const totalItems = 1000;
  const itemsPerLoad = 20;
  const items = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
  const visibleItems = ref([]);
  const isLoading = ref(false);
  
  let currentIndex = 0;
  
  const loadMoreItems = () => {
    isLoading.value = true;
    setTimeout(() => { // Ma'lumotlarni yuklashni simulyatsiya qilish uchun
      const nextItems = items.slice(currentIndex, currentIndex + itemsPerLoad);
      visibleItems.value = [...visibleItems.value, ...nextItems];
      currentIndex += itemsPerLoad;
      isLoading.value = false;
    }, 1000);
  };
  
  onMounted(() => {
    loadMoreItems();
  });
  
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading.value) { // 5 - bu pastki chegarani aniqlash uchun foydalanilgan qiymat
      loadMoreItems();
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  </script>
  
  <style>
  .item {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .loading {
    text-align: center;
  }
  </style>
  