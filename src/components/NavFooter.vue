<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../assets/img/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">小米商城</a><span>|</span>
      <a href="">MIUI</a><span>|</span>
      <a href="">米家</a><span>|</span>
      <a href="">米聊</a>
    </div>
    <div class="copyright">
      CopyRight ©2020 All Right 
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss" scoped>
  .footer{
    height: 234px;
    border-top: 1px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 56px;
        height: 57px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
        display: inline-block;
      }
      span{
        margin: 0 10px;
      }
      margin-bottom: 13px;
    }
  }
</style>