<template>
    <div id="head">
      <header class="mu-head">
        <i class="mu-logo"></i>
        <a href="#" class="app-download">下载APP</a>
      </header>
    </div>
</template>

<style lang="sass" scoped>
@import '../common/common.scss';

$q_green:#31c27c;

header.mu-head{
  width: 100%;
  height: rem(100);
  background-color: $q_green;
  padding: 0 rem(10);
  i.mu-logo{
    float: left;
    height: 100%;
    width: rem(180);
    background:url(../assets/logo.png) center no-repeat;
    background-size: 100%;
  }
  .app-download{
    float: right;
    height: rem(50);
    width: rem(150);
    margin-top: rem(25);
    line-height: rem(40);
    @include font-dpr2(28px);
    text-align: center;
    border-radius: 44px;
    padding: 3px 5px;
    background-color: rgba(0,0,0,.2);
    margin-right: rem(15);
  }
}
</style>

<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>