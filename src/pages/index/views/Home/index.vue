<template>
  <div id="home">
    <div class="top common-width">
      <ul>
        <li @click="showAddressSelect" class="bold-black">
          <van-icon name="location" color="#1E90FF" size="1.2rem"></van-icon>
          <span>地址</span>
          <van-icon name="arrow-down" color="gray" size="0.5rem" class="icon-middle" />
        </li>
        <li class="simple-blue">
          <van-icon name="wap-nav" class="icon-bottom" />
        </li>
        <li class="simple-blue">
          <van-icon name="scan" size="1.2rem" />
          <span>扫码</span>
        </li>
      </ul>
    </div>
    <div class="search" size="1.1rem">
      <search class="common-width"></search>
    </div>
    <!-- <router-view></router-view> -->

    <div class="content">
      <div class="swipe-pic banner">
        <!-- <swipe-picture :img-data="imgData"></swipe-picture> -->
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="img in imgData" :key="img">
            <img :src="img" class="common-width" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="category">
        <van-swipe loop="false" @change="changeCate">
          <van-swipe-item v-for="(iconD,i) in iconData" :key="i+122">
            <van-grid column-num="5" border="false" square="true">
              <van-grid-item v-for="(icon,index) in iconD" :key="index+10023">
                <template>
                  <img :src="icon.src" />
                  <span>{{icon.desc}}</span>
                </template>
              </van-grid-item>
            </van-grid>
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator">
            <span v-for="i in iconData.length" :key="i" :class="{selected: i===selectByCate}"></span>
          </div>
        </van-swipe>
      </div>
      <div>TEST: {{selectByCate}} <button @click="selectByCate++">加1</button></div>
      <div class="addvip common-width"></div>
      <div class="bought">
        <shop-simple></shop-simple>
      </div>
      <div class="pickup">
        <shop-simple></shop-simple>
      </div>
      <div class="swipe-pic adver">
        <!-- <swipe-picture :img-data="imgData"></swipe-picture> -->
        <van-swipe loop="true">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>

          <!-- <div slot="indicator">
            <span v-for="i in [1,2]" :key="i" >{{i}}</span>
          </div>-->
        </van-swipe>
      </div>
      <div class="recommend common-width">
        <shop-complex></shop-complex>
      </div>
    </div>
    <transition
      name="test"
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
    >
      <h4 v-show="showH">daily test</h4>
    </transition>
    <button @click="showH = !showH">切换</button>

    <!-- <test icon-class="close" class-name="disabled"></test> -->
    <!-- <button @click="t">rerfaerfs</button> -->
    <hr />
    <order-item></order-item>

    <!-- <shop-simple></shop-simple>
    <shop-complex></shop-complex>-->
    <!-- <slide-to-full></slide-to-full> -->
  </div>
</template>

<script>
import OrderItem from "@/components/OrderItem";
import Search from "@/views/Search";
import ShopSimple from "@/components/ShopSimple";
import ShopComplex from "@/components/ShopComplex";
import SwipePicture from "@/components/SwipePicture";
import SlideToFull from "@/components/SlideToFull";
export default {
  data() {
    return {
      selectByCate: 1,
      imgData: [
        require("@/assets/test1.jpg"),
        require("@/assets/test2.jpg"),
        require("@/assets/test3.jpg")
      ],
      iconData: [
        [
          {
            src: require("@/assets/image1.jpg"),
            desc: "D1描述"
          },
          {
            src: require("@/assets/image2.jpg"),
            desc: "D2描述"
          },
          {
            src: require("@/assets/image3.jpg"),
            desc: "D3描述"
          },
          {
            src: require("@/assets/image4.jpg"),
            desc: "D4描述"
          },
          {
            src: require("@/assets/image5.jpg"),
            desc: "D5描述"
          },
          {
            src: require("@/assets/image6.jpg"),
            desc: "D6描述"
          },
          {
            src: require("@/assets/image7.jpg"),
            desc: "D7描述"
          },
          {
            src: require("@/assets/image8.jpg"),
            desc: "D8描述"
          },
          {
            src: require("@/assets/image11.png"),
            desc: "D9描述"
          },
          {
            src: require("@/assets/image12.png"),
            desc: "D10描述"
          }
        ],
        [
          {
            src: require("@/assets/image1.jpg"),
            desc: "D1描述"
          },
          {
            src: require("@/assets/image1.jpg"),
            desc: "D2描述"
          },
          {
            src: require("@/assets/image1.jpg"),
            desc: "D3描述"
          },
          {
            src: require("@/assets/image4.jpg"),
            desc: "D4描述"
          },
          {
            src: require("@/assets/image5.jpg"),
            desc: "D5描述"
          },
          {
            src: require("@/assets/image6.jpg"),
            desc: "D6描述"
          },
          {
            src: require("@/assets/image2.jpg"),
            desc: "D7描述"
          },
          {
            src: require("@/assets/image8.jpg"),
            desc: "D8描述"
          },
          {
            src: require("@/assets/image11.png"),
            desc: "D9描述"
          },
          {
            src: require("@/assets/image12.png"),
            desc: "D10描述"
          }
        ]
      ]
    };
  },
  components: {
    // Scroll,
    OrderItem,
    ShopSimple,
    SlideToFull,
    SwipePicture,
    ShopComplex,
    Search
  },
  created() {
    // this.$router.push({path: '/test'})
  },
  methods: {
    changeCate(index) {
      this.selectByCate = index + 1;
      console.log(this.selectByCate);
    }
  }
};
</script>

<style lang="scss">
$height: 13vh;
@import "@/styles/index.scss";
.common-width {
  width: 94% !important;
  margin: 0 auto;
}
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background: #42b983;
  .top {
    ul {
      padding: 10px 0 15px;
      list-style: none;
      overflow: hidden;
      li {
        margin: 0 2px;
        &:last-child {
          margin-right: 15px;
        }
        span {
          padding: 0 3px;
        }
        .van-icon {
          vertical-align: text-top;
          &.icon-middle {
            vertical-align: baseline;
          }
          &.icon-bottom {
            vertical-align: text-bottom;
          }
        }
        &.bold-black {
          font-size: 1.1rem;
          font-weight: 600;
          color: black;
          float: left;
        }
        &.simple-blue {
          font-size: 1rem;
          color: #1e90ff;
          float: right;
        }
      }
    }
  }
  .search {
    position: sticky;
    top: 0;
    z-index: 9999;
    background: white;
  }
  .swipe-pic {
    height: $height;
    .van-swipe {
      height: 100%;
      img {
        // width: 94%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  .category {
    font-size: 0.9rem;
    padding: 12px 0;
    .custom-indicator {
      span {
        margin: 0 3px;
        display: inline-block;
        width: 10px;
        height: 1px;
        background: rgb(165, 163, 163);
        &.selected {
          background: #42b983;
        }
      }
    }
    .van-grid-item__content--center {
      img {
        border-radius: 50%;
        width: 70%;
      }
      span {
        padding: 3px;
      }
    }
  }
}
</style>
