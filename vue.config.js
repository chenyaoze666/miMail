module.exports = {
  devServer:{
    host:'localhost',
    port:3000,
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        changeOrigin:true,//主机头url
        pathRewrite:{//两者配合表示请求地址上有/api 但实际上他表示''
          '/api':''
        }
      }
    }
  }
}