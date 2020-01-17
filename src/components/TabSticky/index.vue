<template>
  <div class="tab-sticky" ref="tabSticky">
    <div class="mask-layer">
      <van-overlay :show="showMaskLayer" :z-index="-1" @click="showMaskLayer=false" />
    </div>
    <div class="tab-title">
      <span
        @click="getDataBySelect(1)"
        :class="{'bold-font': selectByCondition === 1 && !clickComplex, 'show-blue': clickComplex}"
      >
        <span class="text-ellipsis">{{selectByComplex}}</span>
        <van-icon v-show="!clickComplex" name="arrow-down" />
        <van-icon v-show="clickComplex" name="arrow-up" />
      </span>
      <span @click="getDataBySelect(2)" :class="{'bold-font': selectByCondition === 2}">距离最近</span>
      <span @click="getDataBySelect(3)" :class="{'bold-font': selectByCondition === 3}">销量最高</span>
      <span
        @click="getDataBySelect(4)"
        :class="{'bold-font': selectByBrushD.length > 0 && !clickBrush, 'show-blue': clickBrush}"
      >
        <span>刷选</span>
        <van-icon name="filter-o" />
      </span>
    </div>
    <div class="tab-sticky-content">
      <div v-show="clickComplex" class="complex-content">
        <van-cell
          v-for="(ac, index) in allAboutComplex"
          :key="index"
          :title="ac"
          :border="false"
          @click="selectComplex"
          :class="{'show-blue': selectByComplex === ac}"
        >
          <van-icon slot="right-icon" name="success" v-show="selectByComplex === ac" />
        </van-cell>
      </div>
      <div v-show="clickBrush" class="brush-content">
        <div class="business-optional">
          <div class="brush-title">
            <span class="color-gray">{{allAboutBrush[0].title}}</span>
            <span class="color-lightgray" v-if="allAboutBrush[0].desc">({{allAboutBrush[0].desc}})</span>
          </div>
          <div class="brush-items">
            <span
              class="show-button text-left"
              :class="{clicked: selectByBrushD.includes(item.word)}"
              v-for="(item, index) in allAboutBrush[0].content"
              :key="index"
              @click="addToSelectedBrush(item.word, 'multiple')"
            >
              <van-icon :name="item.icon" :color="item.color" size="1em" />
              <span>{{item.word}}</span>
            </span>
          </div>
        </div>
        <div class="promotion-active">
          <div class="brush-title">
            <span class="color-gray">{{allAboutBrush[1].title}}</span>
            <span class="color-lightgray" v-if="allAboutBrush[1].desc">({{allAboutBrush[1].desc}})</span>
          </div>
          <div class="brush-items">
            <span
              class="show-button text-center"
              :class="{clicked: selectByBrushS === word}"
              v-for="(word, index) in allAboutBrush[1].word"
              :key="index"
              @click="addToSelectedBrush(word, 'single')"
            >{{word}}</span>
          </div>
        </div>
        <div class="filter-bottom">
          <van-button :class="{'light-black': selectByBrushS === ''}" @click="selectByBrushS=''">清空</van-button>
          <van-button
            v-show="brushShopNumber > 0"
            class="back-blue"
            @click="getShopInfo(4)"
          >查看 {{ brushShopNumber }} 个商家</van-button>
          <van-button
            v-show="brushShopNumber == 0"
            class="back-blue"
            loading
            loading-type="spinner"
          ></van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectByCondition: 1, // 1:综合排序 2:距离最近 3:销量最高  :刷选

      selectByComplex: "综合排序", // 综合排序选择的内容
      selectByBrushD: [], // 刷选 可选项 多选 有选中 显示 粗体
      selectByBrushS: "", // 刷选 可选项  单选
      brushShopNumber: 212,

      allAboutComplex: [
        "综合排序",
        "好评优先",
        "起送价最低",
        "配送最快",
        "配送费最低",
        "人均从低到高",
        "人均从高到低",
        "通用排序"
      ], // 综合排序所有可选项
      allAboutBrush: [
        {
          title: "商家服务",
          desc: "可多选",
          content: [
            {
              icon: "bag",
              color: "#1E90FF",
              word: "蜂鸟专送"
            },
            {
              icon: "bag",
              color: "#FF7F50",
              word: "到店自取"
            },
            {
              icon: "fire",
              color: "#FF8C00",
              word: "品牌商家"
            },
            {
              icon: "fire",
              color: "#FFA500",
              word: "新店"
            },
            {
              icon: "bag",
              color: "#6A5ACD",
              word: "接受预订"
            },
            {
              icon: "fire",
              color: "#FF69B4",
              word: "食无忧"
            },
            {
              icon: "fire",
              color: "#32CD32",
              word: "开发票"
            }
          ]
        },
        {
          title: "优惠活动",
          desc: "单选",
          word: [
            "年货节热卖",
            "首单立减",
            "首次光顾立减",
            "满减优惠",
            "下单返红包",
            "进店领红包",
            "配送费优惠",
            "赠品优惠",
            "特价商品",
            "品质联盟红包"
          ]
        }
      ], // 刷选所有可选项

      clickBrush: false, // 是否点击刷选  点击刷寻时显示蓝色
      clickComplex: false // 是否点击综合排序  点击时显示蓝色
    };
  },
  props: {
    topDistance: {
      type: Number,
      default: 46
    }
  },
  created() {
    this.getShopInfo(1);
  },
  computed: {
    showMaskLayer: {
      get() {
        if (this.clickBrush || this.clickComplex) {
          this.$noMove();
        } else {
          this.$canMove();
        }
        this.$emit("forbid-search", this.clickBrush || this.clickComplex);
        return this.clickBrush || this.clickComplex;
      },
      set(newValue) {
        this.clickComplex = false;
        this.clickBrush = false;
      }
    }
  },
  methods: {
    getDataBySelect(index) {
      // 把Tab滑动到顶端
      var nowDistance = this.$refs.tabSticky.getBoundingClientRect().top;
      window.scrollBy({
        top: nowDistance - this.topDistance,
        left: 0,
        behavior: "smooth"
      });
      var fn = () => {
        if (
          this.$refs.tabSticky.getBoundingClientRect().top > this.topDistance
        ) {
          sId = setTimeout(fn, 100);
          return;
        }
        if (index == 2 || index == 3) {
          this.selectByCondition = index;
          this.clickBrush = false;
          this.clickComplex = false;
          // 获取数据刷新下面显示
          this.getShopInfo(index);
        }
        if (index == 1) {
          this.clickBrush = false;
          this.clickComplex = !this.clickComplex;
        }
        if (index == 4) {
          this.clickComplex = false;
          this.clickBrush = !this.clickBrush;
        }
      };
      var sId = setTimeout(fn, 200);
    },
    selectComplex(e) {
      this.selectByComplex = e.srcElement.innerText;
      this.clickComplex = false;
      this.selectByCondition = 1;
      // 获取数据刷新下面显示
      this.getShopInfo(1);
    },
    addToSelectedBrush(item, type) {
      if (type === "multiple") {
        if (this.selectByBrushD.includes(item)) {
          var index = this.selectByBrushD.indexOf(item);
          if (index > -1) {
            this.selectByBrushD.splice(index, 1);
          }
        } else {
          this.selectByBrushD.push(item);
        }
      } else {
        this.selectByBrushS = item;
      }
    },
    getShopInfo(index) {
      this.clickBrush = false;
      this.clickComplex = false;
      var data = [];
      switch (index) {
        case 1:
          data = [this.selectByComplex];
          break;
        case 2:
          data = ["距离最近"];
          break;
        case 3:
          data = ["销量最高"];
          break;
        case 4:
          data = [].concat(this.selectByBrushD, this.selectByBrushS);
          break;
      }
      this.$emit("search-condition", data);
    },
    preventDefaultByScroll(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
</script>

<style lang="scss" scoped>
$lightBlue: rgb(2, 128, 253);
.tab-sticky {
  font-size: 0.9rem;
  border-bottom: 1px solid #eeeeee;
  background: white;
  position: relative;
  height: 35px;
  .tab-title {
    padding: 0 3%;
    line-height: 34px;
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    .van-icon {
      vertical-align: 10px !important;
    }
    span {
      &.bold-font {
        font-weight: 600;
      }
      > span {
        display: inline-block;
        max-width: 4.2em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.text-ellipsis {
          width: 4.2em;
        }
      }
      > .van-icon {
        vertical-align: 10px;
      }
    }
  }
  .show-blue {
    color: #1e90ff;
  }
  .tab-sticky-content {
    line-height: 2;
    position: absolute;
    top: 35px;
    left: 0;
    background: white;
    width: 100%;
    .complex-content,
    .business-optional,
    .promotion-active {
      padding: 0 3%;
    }
    .brush-content {
      .color-gray {
        color: rgb(92, 91, 91);
        padding-right: 5px;
      }
      .color-lightgray {
        color: rgb(168, 167, 167);
      }
      .brush-title {
        margin: 2px 0;
      }
      .brush-items {
        display: inline-flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .show-button {
        box-sizing: border-box;
        display: inline-block;
        width: 32%;
        background: rgb(243, 241, 241);
        padding: 5px;
        padding-left: 5%;
        margin: 5px 0;
        span {
          padding-left: 2px;
        }
        &.text-center {
          padding: 5px;
          text-align: center;
        }
        &.clicked {
          color: $lightBlue;
          background: rgb(215, 227, 252);
        }
      }
      .filter-bottom {
        margin-top: 30px;
        .van-button {
          width: 50%;
        }
        .light-black {
          color: #a1a1a1;
        }
        .back-blue {
          background: $lightBlue;
          color: white;
        }
      }
    }
  }
}
</style>