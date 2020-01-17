<template>
  <div id="app">
    <!-- <div style="height: 100vh">
      <router-view></router-view>
    </div>-->
    <div v-show="!inputStatus" class="top common-width">
      <ul>
        <li @click="showAddressSelect" class="bold-black">
          <van-icon name="location" color="#1E90FF" size="1.2rem"></van-icon>
          <span>地址</span>
          <van-icon name="arrow-down" color="gray" size="0.5rem" class="icon-middle" />
        </li>
        <li class="simple-blue">
          <van-icon name="wap-nav" class="icon-bottom" />
          <span>其他</span>
        </li>
        <li class="simple-blue">
          <van-icon name="scan" size="1.2rem" />
          <span>扫码</span>
        </li>
      </ul>
    </div>
    <div class="search" size="1.1rem">
      <search class="common-width" :forbid-search="forbidSearch" @input-status="inputStatus = $event"></search>
    </div>
    <div v-show="!inputStatus" class="content">
      <div class="swipe-pic banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="img in imgData" :key="img">
            <img :src="img" class="common-width" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div v-if="activeImg" class="active-block common-width">
        <img :src="activeImg" />
      </div>
      <div class="category">
        <van-swipe :loop="false" @change="changeCate">
          <van-swipe-item v-for="(iconD,i) in iconData" :key="i+122">
            <van-grid :column-num="5" :border="false" :square="true">
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
      <div v-if="createdItems.length" class="recreation common-width">
        <van-button v-for="item in createdItems" :key="item.desc">
          <van-icon :name="item.iconName" :color="item.iconColor" size="1.3em" />
          <span>{{item.desc}}</span>
        </van-button>
      </div>
      <div class="addvip common-width">
        <span class="bold">
          <van-icon name="vip-card-o" color="#CD853F" />加入超级会员
        </span>
        <span class="small">每月领20元红包</span>
        <span class="small">
          立即开通
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="discount common-width">
        <div>
          <span class="area-title bold-font">优惠专区</span>
          <span></span>
        </div>
        <shop-simple></shop-simple>
      </div>
      <div class="bought common-width">
        <div>
          <span class="area-title bold-font">附近买过</span>
          <span class="small right">
            <span>共{{boughtShop.length}}家</span>
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="flex-content">
          <order-item
            :vertical="true"
            v-for="shop in boughtShop"
            :key="shop.name"
            :imgSrc="shop.imgSrc"
            :name="shop.name"
            :description="shop.description"
          ></order-item>
        </div>
      </div>
      <div class="pickup common-width">
        <div class="pickup-title">
          <span class="area-title bold-font">到店自取</span>
          <span class="small right">
            <span>共{{pickupShop.length}}家</span>
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="flex-content">
          <order-item
            :vertical="true"
            :widthSize="1"
            v-for="shop in pickupShop"
            :key="shop.name"
            :imgSrc="shop.imgSrc"
            :name="shop.name"
            :distance="shop.distance"
            :description="shop.description"
          ></order-item>
        </div>
      </div>
      <div class="swipe-pic adver">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="img in imgData" :key="img">
            <img :src="img" class="common-width" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="recommend">
        <div class="area-title bold-font common-width">推荐商家</div>
        <div class="recommend-select">
          <tab-sticky @forbid-search="forbidSearch = $event" @search-condition="searchStores"></tab-sticky>
        </div>
        <div class="recommend-content common-width">
          <shop-complex
            v-for="(store,index) in recommendStores"
            :key="index"
            :imageSrc="store.imgSrc"
            :shopName="store.shopName"
            :rate="store.rate"
            :numbers="store.numbers"
            :startPrice="store.startPrice"
            :fare="store.fare"
            :distance="store.distance"
            :hummer="store.hummer"
            :userEvaluate="store.extraInfo"
            :fullReduction="store.fullReduction"
          ></shop-complex>
          <div class="recommend-content-bottom">
            <div v-if="loadingStatus" class="reloading">
              <van-loading type="spinner" color="#1989fa" />
            </div>
            <div v-else class="prompt-infomation" @click="searchStores(0)">{{promptInfo}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from "@/components/OrderItem";
import Search from "@/views/Search";
import ShopSimple from "@/components/ShopSimple";
import ShopComplex from "@/components/ShopComplex";
import SwipePicture from "@/components/SwipePicture";
import SlideToFull from "@/components/SlideToFull";
import TabSticky from "@/components/TabSticky";
import { fetchRecommend } from "@/api/getInfo.js";
export default {
  data() {
    return {
      inputStatus: false,

      forbidSearch: false,

      selectByCate: 1,
      activeImg: "", // require("@/assets/active.jpg"),
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
            src: require("@/assets/image2.jpg"),
            desc: "D2描述"
          },
          {
            src: require("@/assets/image3.jpg"),
            desc: "D3描述"
          },
          {
            src: require("@/assets/image2.jpg"),
            desc: "D4描述"
          },
          {
            src: require("@/assets/image2.jpg"),
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
      ],
      createdItems: [
        {
          desc: "电影",
          iconName: "video",
          iconColor: "#FF0000"
        },
        {
          desc: "酒店",
          iconName: "video",
          iconColor: "#FF8C00"
        },
        {
          desc: "火车票",
          iconName: "video",
          iconColor: "#1E90FF"
        }
      ],
      boughtShop: [
        {
          imgSrc: require("@/assets/image4.jpg"),
          name: "店铺名称1",
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image3.jpg"),
          name: "店铺名称2",
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image2.jpg"),
          name: "店铺名称3",
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image1.jpg"),
          name: "店铺名称4",
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image8.jpg"),
          name: "店铺名称5",
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image6.jpg"),
          name: "店铺名称6",
          description: "相关描述信息"
        }
      ],
      pickupShop: [
        {
          imgSrc: require("@/assets/image5.jpg"),
          name: "店铺名称1",
          distance: 433,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image1.jpg"),
          name: "店铺名称2",
          distance: 423,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image4.jpg"),
          name: "店铺名称3",
          distance: 123,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image3.jpg"),
          name: "店铺名称4",
          distance: 654,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image8.jpg"),
          name: "店铺名称5",
          distance: 273,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image6.jpg"),
          name: "店铺名称6",
          distance: 983,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image4.jpg"),
          name: "店铺名称7",
          distance: 103,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image3.jpg"),
          name: "店铺名称8",
          distance: 1433,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image2.jpg"),
          name: "店铺名称9",
          distance: 983,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image1.jpg"),
          name: "店铺名称10",
          distance: 33,
          description: "相关描述信息"
        },
        {
          imgSrc: require("@/assets/image8.jpg"),
          name: "店铺名称11",
          distance: 873,
          description: "相关描述信息"
        }
      ],
      recommendStores: [],
      searchCondition: [],
      promptInfo: "点击加载更多",
      loadingStatus: false
    };
  },
  components: {
    // Scroll,
    OrderItem,
    ShopSimple,
    SlideToFull,
    SwipePicture,
    ShopComplex,
    Search,
    TabSticky
  },
  created() {},
  methods: {
    changeCate(index) {
      this.selectByCate = index + 1;
    },
    showAddressSelect() {},
    searchStores(data) {
      this.loadingStatus = true;
      var index = 0;
      if (data) {
        this.searchCondition = data;
        // 显示加载进度 页面固定
        //////////////////////
      } else {
        data = this.searchCondition;
        index = this.recommendStores.length;
        if (this.promptInfo == "没有更多内容了") {
          return;
        }
      }
      // 禁止手指滑动
      this.$noMove();
      fetchRecommend({
        search: data,
        index: index
      })
        .then(res => {
          if (index) {
            if (res.data.data.length == 0) {
              this.promptInfo = "没有更多内容了";
            }
            this.recommendStores = [].concat(
              this.recommendStores,
              res.data.data
            );
          } else {
            this.recommendStores = res.data.data;
          }
        })
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          this.$canMove();
          this.loadingStatus = false;
        });
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // background: #42b983;
  .van-icon {
    vertical-align: 0px;
  }
  .top {
    padding: 10px 0 5px;
    ul {
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
            vertical-align: -10%;
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
    padding: 8px 0;
    // background: blue;
  }
  .content {
    margin: 0;
    & > div {
      margin-top: 10px;
    }
    .bold-font {
      font-weight: 600;
    }
    .right {
      float: right;
      .van-icon {
        vertical-align: -2px;
      }
    }
    .swipe-pic {
      margin-top: 0;
      text-align: center;
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
    .active-block {
      height: $height * 1.2;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .category {
      font-size: 0.9rem;
      .custom-indicator {
        text-align: center;
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
    .recreation {
      display: flex;
      justify-content: space-between;
      button {
        flex: 1 1 auto;
        margin: 0 2px;
        span {
          padding-left: 3px;
        }
        .van-icon {
          vertical-align: -16%;
        }
      }
    }
    .addvip {
      text-align: left;
      padding: 0 15px;
      border-radius: 5px;
      height: 35px;
      background: linear-gradient(90deg, #ffe4b5, #ffdead);
      position: relative;
      letter-spacing: 0.5px;
      span {
        line-height: 35px;
        &.bold {
          font-size: 0.9rem;
          font-weight: 900;
          margin-right: 10px;
          &:after {
            content: ".";
            display: inline-block;
            position: absolute;
            bottom: 3px;
          }
          .van-icon {
            transform: translateY(2px);
          }
        }
        &.small {
          font-size: 0.7rem;
          &:last-child {
            line-height: 0.7;
            position: absolute;
            right: 3%;
            top: 0;
            bottom: 0;
            height: 0.7rem;
            margin: auto 0;
            padding: 0;
            .van-icon.van-icon-arrow {
              transform: translateY(1px);
            }
          }
        }
      }
    }
    .discount {
    }
    .bought,
    .pickup {
      .flex-content {
        overflow-x: auto;
        display: flex;
        padding-bottom: 5px;
        & > div {
          margin-right: 5px;
        }
        &::-webkit-scrollbar {
          width: 0 !important;
          height: 0;
        }
      }
    }
    .pickup {
      .pickup-title {
        line-height: 2;
      }
    }
    .adver {
      margin-top: 15px;
    }
    .recommend {
      margin-top: 20px;
      .recommend-select {
        z-index: 999;
        position: sticky;
        top: 46px;
      }
      .recommend-content {
        .recommend-content-bottom {
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
