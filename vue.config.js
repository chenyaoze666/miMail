module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://www.imooc.com',
        changeOrigin:true,//主机头url
        pathRewrite:{//两者配合表示请求地址上有/api 但实际上他表示''
          '/api':''
        }
      }
    }
  }
}