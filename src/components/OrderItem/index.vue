<template>
  <div
    class="order-outer"
    :class="{vertical:vertical, horizontal:!(vertical), 'pic-small':picSmall}"
    :style="{borderWidth: widthSize + 'px'}"
  >
    <div class="order-image">
      <img :src="imgSrc" />
    </div>
    <div class="order-content">
      <div v-if="vertical" class="smaller">
        <div>{{ name }}</div>
        <div v-if="showSaleInfo">月售{{ monthlySale }} 好评率{{ favorableRate }}%</div>
        <div v-if="distance">
          <van-icon name="location" color="#1E90FF" size="1em" />
          <span>{{distance}}m</span>
        </div>
        <div class="weight">
          <span>{{description}}</span>
        </div>
      </div>
      <div v-else>
        <div class="weight">{{ name }}</div>
        <div class="smaller line-height">{{ description}}</div>
        <div class="smaller line-height">
          <span>月售{{ monthlySale }}</span>
          <span>好评率{{ favorableRate }}%</span>
        </div>
        <div class="bottom">
          <span class="weight red">￥{{price }}</span>
          <div class="right">
            <svg-icon icon-class="minus" @click="buyNumber = buyNumber>0?buyNumber-1:0"></svg-icon>
            <span class="width-buy-number">{{ buyNumber }}</span>
            <svg-icon icon-class="plus" @click="buyNumber = buyNumber+1"></svg-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyNumber: 0
    };
  },
  props: {
    imgSrc: {
      default: require("@/assets/image4.jpg"),
      // required: true
    },
    name: {
      default: "大声道GG",
      // required: true
    },
    price: {
      default: 7,
      // required: true
    },
    monthlySale: {
      default: 432,
      // required: true
    },
    favorableRate: {
      default: 89,
      // required: true
    },
    description: {
      default: "这里是相关描述",
      // required: true
    },
    vertical: {   // 垂直展示
      default: false
    },
    showSaleInfo: {   // 展示销售信息
      default: false
    },
    picSmall: {    // 垂直展示时  图片是否不占满格
      default: true
    },
    widthSize: {  // border边框宽度
      default: 0
    },
    distance: {
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
$width: 20vw;
$padding: 4vw;
.order-outer {
  border-style: solid;
  border-color: #eeeeee;
  border-width: 0px;
  &.vertical {
    width: $width;
    text-align: center;
  }
  &.pic-small {
    .order-image {
      padding: $padding;
    }
    .order-content {
      margin-top: -$padding;
      padding-top: 3px;
    }
  }
  &.horizontal {
    display: flex;
    .order-content {
      flex: 1 1 auto;
      margin: 0 10px;
      position: relative;
    }
  }
  .order-image {
    width: $width;
    height: $width;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .order-content {
    padding: 5px;
    div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 1.2rem;
      .red {
        color: red;
      }
      .weight {
        font-weight: 600;
      }
      .line-height {
        line-height: 1.5;
      }
      .bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        .right {
          float: right;
          line-height: 1;
          .width-buy-number {
            padding: 0 15px;
            text-align: center;
          }
        }
      }
      .van-icon{
        vertical-align: -1px;
      }
    }
  }
}
</style>