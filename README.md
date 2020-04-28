# MiMall
高仿小米商城

## 跨域
* CORS跨域
  * 服务器设置 后端允许前端某个站点进行访问
* JSONP跨域
  * 前端适配, 后台配合 前后台同时改造
  * 前端jsonp插件
```
jsonp(url, (err,res)=>{

})
```
* 代理跨域
  * 接口代理 通过修改nginx服务配置来实现
  * 前端修改, 后端不动
```
新建 vue.config.js

module.exports = {
  devServer:{
    host:'localhost',
    post:3000,
    proxy:{
      '/api':{
        target:'代理地址(http://localhost:8080)',
        changeOrigin:false//主机头url
      }
    }
  }
}


module.exports = {
  devServer:{
    host:'localhost',
    post:8080,
    proxy:{
      '/api':{
        target:'代理地址',
        changeOrigin:true,//主机头url
        pathRewrite:{//两者配合表示请求地址上有/api 但实际上他表示''
          '/api':''
        }
      }
    }
  }
}

```
## 依赖
```
npm i vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save-dev
```
## 路由封装
```
import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product';
import Detail from './pages/detail';
import Cart from './pages/cart';
import Order from './pages/order';
import OrderConfirm from './pages/orderConfirm';
import OrderList from './pages/orderList';
import OrderPay from './pages/orderPay';
import Alipay from './pages/alipay';

Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/product/:id',
          name: 'product',
          component: Product,
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
        },
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'list',
          name: 'ordor-list',
          component: OrderList,
        },
        {
          path: 'confirm',
          name: 'Order-confirm',
          component: OrderConfirm,
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay,
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: Alipay,
        }
      ]
    }
  ]
})
```