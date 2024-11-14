import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";

const myRoutes = [
    {path:"/", component: HomeComponent},

]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;