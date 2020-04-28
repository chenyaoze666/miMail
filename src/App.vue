<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index';
export default {
  name: 'App',
  data(){
    return {
      res:''
    }
  },
  components: {
  },
  mounted(){
    // storage.setItem('a',1)
    // storage.setItem("abc",{a:1},'user');
    // storage.clear("a")
    //第一种方式静态json
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res;
    // })
    //第二种通过easy-mock平台
    //   this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res;
    // })
    //第三种方式 集成Mockjs
      this.axios.get('/user/login').then((res) => {
      this.res = res;
    })
  }
}
</script>

<style>
</style>
