import Vue from 'vue'
import VueRouter from 'vue-router'

//解决在页面中不能点击这个页面的路由的报错 push
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//解决在页面中不能点击这个页面的路由的报错  replace
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
Vue.use(VueRouter)


const Home = () => import('../views/home/Home.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/shopcart/ShopCart.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:Home
  },
  {
    path: '/detail',
    name: 'detail',
    component:Detail
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/Cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component:Profile
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})


export default router
