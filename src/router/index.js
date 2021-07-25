import { createWebHistory, createRouter } from "vue-router";
import Intro from "../views/Intro.vue";
import Home from "../views/Home.vue";
import Match from "../component/match/Match.vue"
import Message from "../component/message/Message.vue"
import NavMessage from "../component/message/NavMessage.vue"
import Profile from "../component/profile/Profile.vue"
import Another from "../component/another/Another.vue"
import AnotherMatch from "../component/another/AnotherMatch.vue"
import Setting from "../component/setting/Setting.vue"
import Edit from "../component/setting/Edit.vue"
import Account from "../component/setting/Account.vue"

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
                path: 'match',
                component: AnotherMatch
            },
            {
                path: 'message/:id',
                component: Message
            },
            {
                path: 'message',
                component: NavMessage
            },
            {
                path: 'profile/:id',
                component: Profile
            },
            {
                path: 'another',
                component: Another
            },
            {
                path: 'setting',
                component: Setting,
            },
            {
                path: 'setting/edit',
                component: Edit
            },
            {
                path: 'setting/account',
                component: Account
            },
        ]
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "exact-active",
});

export default router;