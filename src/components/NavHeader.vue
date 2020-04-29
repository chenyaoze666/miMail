<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart iconfont">&#xe655;</span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item) in phoneList" :key="item.id">
                  <a :href="'/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.mainImage"
                        :alt="item.subtitle"
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30 Pro 变焦版</div>
                    <div class="pro-price">3799元起</div>
                  </a>
                </li>
                  <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30 Pro 变焦版</div>
                    <div class="pro-price">3799元起</div>
                  </a>
                </li>
                  <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30 Pro 变焦版</div>
                    <div class="pro-price">3799元起</div>
                  </a>
                </li>
                  <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30 Pro 变焦版</div>
                    <div class="pro-price">3799元起</div>
                  </a>
                </li>
                  <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30 Pro 变焦版</div>
                    <div class="pro-price">3799元起</div>
                  </a>
                </li>
                  <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30 Pro 变焦版</div>
                    <div class="pro-price">3799元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=200&h=138&f=webp&q=90"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;" class="iconfont">&#xe7f2;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  mounted(){
    this.getProductList();
  },
  data(){
    return {
      username:'jack',
      phoneList:[],
    }
  },
  filters:{
    currency(val){
      if(!val)return '0.00';
      return '￥' + val + '元'
    }
  },
  methods:{
    login(){
      this.$router.push('/login')
    },
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012'
        }
      }).then((res) => {
       if(res.list.length >= 6){
         this.phoneList = res.list.slice(0,6)
       }
      })
    },
    goToCart(){
      this.$router.push('/cart')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;

    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #666666;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;

          &::before {
            content: "";
            @include bgImg(55px, 55px, "../assets/img/mi-logo.png", "55px");
            transition: margin 0.2s;
          }
          &::after {
            content: "";
            @include bgImg(55px, 55px, "../assets/img/mi-home.png", "55px");
          }

          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            overflow: hidden;
            height: 0px;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all .5s;
            

            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              cursor: pointer;
              a {
                display: inline-block;
                text-decoration: none;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &::before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child::before{
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            font-weight: bold;
            margin-left: 17px;
            text-decoration: none;
            color: #000000;
          }
        }
      }
    }
  }
}
</style>