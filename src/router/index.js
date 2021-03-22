import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//处理路由跳转相同地址的警告
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // redirect: "/user",
    children: [
      {
        path: "/",
        meta: {
          keyStr: "首页",
        },
        component: () => import("../components/Biz.vue"),
      },
      {
        meta: {
          keyStr: "用户",
        },
        path: "user",
        component: () => import("../components/User.vue"),
      },
      {
        meta: {
          keyStr: "微信",
        },
        path: "wechat",
        component: () => import("../components/Wechat.vue"),
      },
      {
        meta: {
          keyStr: "测试",
        },
        path: "test",
        component: () => import("../components/Test.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Sider.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
