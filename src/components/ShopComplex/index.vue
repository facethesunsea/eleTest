<template>
  <div class="outer-shop-complex">
    <div class="shop-complex-image">
      <img :src="imageSrc" />
    </div>
    <div class="shop-complex-content">
      <div>{{ shopName }}</div>
      <div class="smaller">
        <svg-icon icon-class="collet" outer-name="small-size"></svg-icon>
        <span class="red">{{ rate }}</span>
        <span>月售{{numbers}}</span>
      </div>
      <div class="smaller">
        <span>起送￥{{ startPrice }}</span>
        <span>远距离配送￥{{ fare }}</span>
        <span style="float:right">
          <span class="right">{{useTime}}分钟</span>
          <span class="right">{{distance}}km</span>
        </span>
      </div>
      <div v-if="userEvaluate" class="show-evaluate">“ {{userEvaluate}} ”</div>
      <div class="show-reduct" :class="{'show-all': ShowAllInfo}">
        <div style="width:90%;display:inline-block">
          <mark-button
            v-for="(fr,index) in fullReduction"
            :key="index"
            class="margin-right"
            :value="fr"
            class-check="reduct"
          ></mark-button>
        </div>
        <div style="width:auto;display:inline-block" v-if="fullReduction.length>5">
          <!-- <span>{{fullReduction.length}}</span> -->
          <svg-icon
            v-if="!ShowAllInfo"
            @click="ShowAllInfo=true"
            class="svg-icon"
            icon-class="drop-down-arrow"
            outer-name="smaller-size"
          ></svg-icon>
          <svg-icon
            v-else
            @click="ShowAllInfo=false"
            class="svg-icon"
            icon-class="pull-up-arrow"
            outer-name="smaller-size"
          ></svg-icon>
        </div>
      </div>
      <div v-if="!simpleShow" class="show-image">
        <OrderItem
          v-for="item in foodItems"
          :key="item.imageSrc"
          :img-src="item.imgSrc"
          :name="item.name"
          :price="item.price"
          :monthly-sale="item.monthlySale"
          :favorable-rate="item.favorableRate"
          :description="item.description"
          :vertical="item.vertical"
          class="image-item"
        ></OrderItem>
      </div>
    </div>
  </div>
</template>

<script>
import MarkButton from "@/components/MarkButton";
import OrderItem from "@/components/OrderItem";
export default {
  components: {
    MarkButton,
    OrderItem
  },
  data() {
    return {
      addInfo: "商家有其他要显示的东西",
      ShowAllInfo: false
    };
  },
  props: {
    simpleShow: {
      // 是否要展示店铺里的图片商品
      default: true // true   false
    },
    imageSrc: {
      default: "",
      required: true
    },
    shopName: {
      default: "大声道大声道",
      required: true
    },
    rate: {
      default: "4.5",
      required: true
    },
    numbers: {
      default: "3232",
      required: true
    },
    startPrice: {
      default: 15,
      required: true
    },
    fare: {
      default: 4.2,
      required: true
    },
    distance: {
      default: 3.4,
      required: true
    },
    hummer: {
      default: false
    },
    userEvaluate: {
      default: ""
    },
    fullReduction: {
      default: [
        "32减21",
        "55减27",
        "100减44",
        "32减21",
        "55减27",
        "100减44",
        "32减21",
        "55减27",
        "100减44",
        "32减21",
        "55减27",
        "100减44"
      ]
    },
    foodItems: {
      default() {
        return [
          {
            imgSrc: require("@/assets/image4.jpg"),
            name: "大声道GG",
            price: 7,
            monthlySale: 432,
            favorableRate: 89,
            description: "描述描述",
            vertical: true
          },
          {
            imgSrc: require("@/assets/image7.jpg"),
            name: "大声道GG",
            price: 7,
            monthlySale: 432,
            favorableRate: 89,
            description: "描述描述",
            vertical: true
          },
          {
            imgSrc: require("@/assets/image2.jpg"),
            name: "大声道GG",
            price: 7,
            monthlySale: 432,
            favorableRate: 89,
            description: "描述描述",
            vertical: true
          }
        ];
      }
    }
  },
  computed: {
    useTime() {
      return Math.floor(this.distance);
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 20vw;
.red {
  color: red;
}
.outer-shop-complex {
  padding: 10px 0;
  display: flex;
  .shop-complex-image {
    min-width: $height;
    width: $height;
    height: $height;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shop-complex-content {
    flex: 1 1 auto;
    min-height: $height;
    line-height: 1.6;
    padding-bottom: 6px;
    border-bottom: 1px solid #dddddd;
    overflow: hidden;
    div span {
      display: inline-block;
      margin-right: 0.5rem;
      .right {
        margin-left: 0.5rem;
        margin-right: 0;
      }
    }
    .show-evaluate {
      margin: 8px 0 3px;
    }
    .show-reduct {
      line-height: 1.6;
      height: 1rem * 1.6;
      overflow: hidden;
      position: relative;
      .svg-icon {
        position: absolute;
        top: 0.5rem;
      }
    }
    .show-all {
      height: auto !important;
    }

    .shop-name {
      width: 100%;
      line-height: 1.5;
      // height: $height / 2;
    }
    .info {
      width: 100%;
      // height: $height / 3;
    }
    .margin-right {
      margin-right: 1vw;
    }
    .show-image {
      padding: 5px 0;
      display: flex;
      overflow: hidden;
      justify-content: space-between;
      & > div {
        flex: 0 0 auto;
      }
    }
  }
}
</style>