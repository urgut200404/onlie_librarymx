import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui';
import router from "../src/Router/index"
// import pdf from "vue-pdf"
 

const app = createApp(App)


app.use(router)
app.use(naive)
// app.use(pdf)
app.mount('#app')
