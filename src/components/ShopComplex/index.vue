<template>
  <div class="outer-shop-simple">
    <div class="image">
      <img :src="imageSrc" />
    </div>
    <div class="content">
      <p>{{ shopName }}</p>
      <p class="smaller">
        <svg-icon icon-class="collet" outer-name="small-size"></svg-icon>
        <span class="red">{{ rate }}</span>
        月售{{numbers}}
      </p>
      <p class="smaller">
        <span>起送￥{{ startPrice }}</span>
        <span>远距离配送￥{{ fare }}</span>
        <span style="float:right">
          <span class="right">{{useTime}}分钟</span>
          <span class="right">{{distance}}km</span>
        </span>
      </p>
      <div class="show-reduct" :class="{'show-all': ShowAllInfo}">
        <div style="width:90%;display:inline-block">
          <mark-button
            v-for="fr in fullReduction"
            :key="fr"
            class="margin-right"
            :value="fr"
            class-check="reduct"
          ></mark-button>
        </div>
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
      <div class="show-image">
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
      default: [
        {
          imgSrc: "111",
          name: "sdfa大声道GG",
          price: 7,
          monthlySale: 432,
          favorableRate: 89,
          description: "fadffafa等方法",
          vertical: true
        },
        {
          imgSrc: "222",
          name: "sdfa大声道GG",
          price: 7,
          monthlySale: 432,
          favorableRate: 89,
          description: "fadffafa等方法",
          vertical: true
        },
        {
          imgSrc: "333",
          name: "sdfa大声道GG",
          price: 7,
          monthlySale: 432,
          favorableRate: 89,
          description: "fadffafa等方法",
          vertical: true
        },
        {
          imgSrc: "444",
          name: "sdfa大声道GG",
          price: 7,
          monthlySale: 432,
          favorableRate: 89,
          description: "fadffafa等方法",
          vertical: true
        }
      ]
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
.outer-shop-simple {
  padding: $height/8;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  .image {
    width: $height;
    height: $height;
    position: relative;
    margin-right: $height/8;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .content {
    width: 100vw - $height/4 - $height -$height/8;
    min-height: $height;
    box-sizing: border-box;
    text-align: left;
    line-height: 1.5;
    border-bottom: 1px solid #dddddd;
    p span {
      display: inline-block;
      margin-right: 0.5rem;
      .right {
        margin-left: 0.5rem;
        margin-right: 0;
      }
    }
    .show-reduct {
      height: 1.5rem;
      position: relative;
      overflow: hidden;
      .svg-icon {
        position: absolute;
        top: 0.25rem;
      }
    }
    .show-all {
      height: auto !important;
    }

    .shop_name {
      width: 100%;
      line-height: 1.5;
      height: $height / 2;
    }
    .info {
      width: 100%;
      height: $height / 3;
    }
    .margin-right {
      margin-right: 1vw;
    }
    .show-image {
      // background: red;
      // width: 33%;
      display: flex;
      overflow: hidden;
    }
  }
}
</style>