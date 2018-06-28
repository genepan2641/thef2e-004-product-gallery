import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import HomePage from '../components/HomePage.vue';
import ProductPage from '../components/ProductPage.vue';

export default new Router({
  routes: [{
    path: '/',
    component: HomePage
  }, {
    path: '/product',
    component: ProductPage
  }]
})
