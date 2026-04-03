import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import Battle from "../pages/Battle.vue"
import Result from "../pages/Result.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path : "/", component: Home},
        {path : "/battle", component: Battle},
        {path: "/result", component: Result}
    ]
})

export default router