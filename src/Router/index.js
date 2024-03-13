import {createRouter, createWebHistory} from "vue-router"
const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/', 
            name:"home", 
            component:()=> import("../components/home.vue")
        }, 
        {
            path:'/:pathMath(.*)*', 
            component:()=> import("../components/A404.vue")
        },
        {
            path:"/search/:text", 
            name:"search", 
            component:()=> import("../components/searchs.vue"),
        
        }
        ,{
            path:"/info/book/:id",
            name:"info",
            component:()=> import("../components/infobooks.vue")
            
        }
    ]
})

export default router;