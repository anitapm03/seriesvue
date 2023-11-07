import {createRouter, createWebHistory} from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import CreatePersonaje from './components/CreatePersonaje.vue'
import PersonajesComponent from './components/PersonajesComponent.vue'
import SerieComponent from './components/SerieComponent.vue'
import UpdatePersonaje from './components/UpdatePersonaje.vue'

const myRoutes = [
    {
        path: "/", component: HelloWorld
    },
    {
        path: "/crear", component: CreatePersonaje
    },
    {
        path: "/personajes/:id", component: PersonajesComponent
    },
    {
        path: "/serie/:id", component: SerieComponent
    },
    {
        path: "/update", component: UpdatePersonaje
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;
