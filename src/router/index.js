import { createWebHistory, createRouter } from "vue-router";
import Intro from "../views/Intro.vue";
import Home from "../views/Home.vue";
import Match from "../component/match/Match.vue"
import Message from "../component/message/Message.vue"
import Profile from "../component/profile/Profile.vue"
import Another from "../component/another/Another.vue"

const routes = [
    {
        path: "/",
        component: Intro,
    },
    {
        path: "/home",
        component: Home,
        children: [
            {
                path: '',
                component: Match
            },
            {
                path: 'message/:id',
                component: Message
            },
            {
                path: 'profile/:id',
                component: Profile
            },
            {
                path: 'another',
                component: Another
            }
        ]
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "exact-active",
});

export default router;