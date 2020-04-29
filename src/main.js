import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import './assets/iconfont/iconfont.css'
// import env from './/env'


//mock开关
// const mock = true;
// if(mock){//import 预编译就加载  require 需要时加载
//   require('./mock/api');
// }

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';//代理方式
axios.defaults.timeout = 8000;

// axios.defaults.baseURL = env.baseURL;//根据环境变量

//接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){//10代表未登录
    window.location.href = '/login'
  }else{
    alert(res.msg);
  }
})

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
