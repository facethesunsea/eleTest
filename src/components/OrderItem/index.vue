<template>
  <div
    class="order-outer"
    :class="{vertical:vertical, horizontal:!(vertical), 'one-third': oneThird&&vertical}"
  >
    <div class="image">
      <img :src="imgSrc" />
    </div>
    <div class="content">
      <div v-if="vertical" class="smaller">
        <p :class="{normal: !oneThird}">{{ name }}</p>
        <p v-if="!oneThird">月售{{ monthlySale }} 好评率{{ favorableRate }}%</p>
        <p class="red weight">
          ￥{{price }}
          <span class="right">
            <svg-icon v-if="!oneThird" icon-class="plus" outer-name="small-size"></svg-icon>
          </span>
        </p>
      </div>
      <div v-else>
        <p class="weight">{{ name }}</p>
        <p class="smaller lineTwo">{{ description}}</p>
        <p class="smaller lineTwo">月售{{ monthlySale }} 好评率{{ favorableRate }}%</p>
        <div class="bottom">
          <span class="weight red">￥{{price }}</span>
          <div class="right">
            <svg-icon class="top" icon-class="minus" @click="buyNumber = buyNumber>0?buyNumber-1:0"></svg-icon>
            <span class="widthFRem">{{ buyNumber }}</span>
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
      default: "",
      required: true
    },
    name: {
      default: "sdfa大声道GG",
      required: true
    },
    price: {
      default: 7,
      required: true
    },
    monthlySale: {
      default: 432,
      required: true
    },
    favorableRate: {
      default: 89,
      required: true
    },
    description: {
      default: "fadffafa等方法",
      required: true
    },
    vertical: {
      default: false
    },
    oneThird: {
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.widthFRem {
  display: inline-block;
  width: 3rem;
  text-align: center;
}
.red {
  color: red;
}
svg {
  position: relative;
  padding: 0 5px;
  border: 1px solid #ffffff;
}
.weight {
  font-weight: 600;
  line-height: 2;
}
.lineTwo {
  line-height: 2;
}
.right {
  float: right;
  position: relative;
  right: 1%;
  line-height: 2;
  vertical-align: middle;
}
.bottom {
  position: absolute;
  bottom: 5%;
  width: 100%;
}
.vertical {
  .image {
    width: 100%;
    padding-top: 100%;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .content {
    width: 100%;
  }
}
.horizontal {
  display: flex;
  .image {
    width: 33%;
    padding-top: 33%;
    img {
      width: 90%;
      height: 90%;
      position: absolute;
      top: 5%;
      left: 5%;
    }
  }
  .content {
    width: 65%;
    margin-left: 2%;
    position: relative;
  }
}
.one-third {
  width: 33% !important;
  .image{
    padding-top: 100%;
  }
}
.order-outer {
  width: 100%;
  height: 100%;
  padding: 2%;
  box-sizing: border-box;
  .image {
    height: 0;
    position: relative;
  }
  .content  p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    line-height: 1.1rem;
  }
}
</style>