<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-family: $font-hei;
    font-size: 16px;
    line-height: 1.5;
  }

  #nav {
    padding:30px;
  a{
    font-weight:bold;
    color:#2C3E50;
    &.router-link-exact-active{
      color:#42B923;
    }
  }
  }
</style>
