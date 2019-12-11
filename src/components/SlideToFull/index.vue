<template>
  <div class="outer-full border" ref="test">
    <div class='inner-full border'>
        <ul>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
      <li>ffdfdf</li>
    </ul>
    </div>
    
  </div>
</template>

<script>
export default {
    mounted(){
        window.onscroll = ()=>{
            console.log(this.$refs.test.offsetTop)
            // console.log(this.$refs.test)
            console.log(this.$refs.test.style.top)
            if(this.$refs.test.offsetTop <= 0){
                this.$refs.test.style.top = 0;
            }
        }
    },
    method(){

    }
};
</script>

<style lang="scss" scoped>
.outer-full {
  width: 100vw;
  height: 100vh+10vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  top: 0;
  left: 0;
  .inner-full{
      position: relative;
      top: 10vh;
      max-height: 90vh;
  }
}
</style>