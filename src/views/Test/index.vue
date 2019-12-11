<template>
  <div>
    <h4>daily test</h4>
    <Test :img-data='imgData' :slide-stop='flag'></Test>
    <!-- <test icon-class="close" class-name="disabled"></test> -->
    <!-- <button @click="t">rerfaerfs</button> -->
  </div>
</template>

<script>
// import Search from '@/components/Search'
import Scroll from '@/components/Scroll'
// import SearchInput from '@/components/SearchInput'
import OrderItem from "@/components/OrderItem";
import Search from "@/views/Search";
import ShopSimple from "@/components/ShopSimple";
import ShopComplex from "@/components/ShopComplex";
import SwipePicture from "@/components/SwipePicture";
import SlideToFull from "@/components/SlideToFull";
export default {
  data() {
    return {
      imgData: [
        require("@/assets/test1.jpg"),
        require("@/assets/test2.jpg"),
        require("@/assets/test3.jpg")
      ],
      flag: true
    };
  },
  components: {
    Test: SwipePicture
  },
  created() {

  },
  methods: {
    t(){
      console.log('000')
    }
  },
};
</script>

<style lang="scss" scoped>
div {
  // background: pink;
  width: 100vw;
  // height: 100vh;
}
</style>