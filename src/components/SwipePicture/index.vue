<template>
  <div
    class="outer-slide"
    ref="slide"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div class="inner-slide" ref="slideImg" v-for="src in imgData" :key="src">
      <img :src="src" />
    </div>
  </div>
</template>

<script>
/*
  参数说明：
    imgData: 传入的图片
    loop: 是否循环播放 循环：自动播放+手动滑动  不循环：手滑+图片不循环
*/
export default {
  data() {
    return {
      x1: 0,
      x2: 0,
      start: 0,
      end: 0,
      widthImg: 0,
      imgs: [],
      sId: 0,
      startImg: 0
    };
  },
  props: {
    imgData: {
      default: [],
      required: true
    },
    loop: {
      default: true
    }
  },
  created() {},
  mounted() {
    this.initWidth();
    this.loop && this.autoSlide();
    window.addEventListener("resize", this.initWidth);
  },
  methods: {
    initWidth() {
      this.imgs = this.$refs.slideImg;
      this.widthImg = this.$refs.slide.offsetWidth;
      this.imgs.forEach((img, index) => {
        img.style.left = this.widthImg * index + "px";
      });
    },
    slide(x_diff = Math.floor(this.widthImg / 50)) {
      var diff =
        this.widthImg +
        ((this.imgs[0].offsetLeft - this.imgs.length * this.widthImg) %
          this.widthImg);
      if (diff && diff < x_diff) {
        x_diff = diff;
      }
      this.imgs.forEach(img => {
        if (img.offsetLeft < -this.widthImg) {
          img.style.left =
            img.offsetLeft + this.widthImg * this.imgs.length + "px";
        }
        img.style.left = img.offsetLeft - x_diff + "px";
      });
      if (this.imgs[0].offsetLeft % this.widthImg === 0) {
        this.sId = setTimeout(() => {
          this.slide();
        }, 2500);
      } else {
        this.sId = setTimeout(() => {
          this.slide();
        }, 100 / 50);
      }
    },
    autoSlide() {
      this.sId = setTimeout(() => {
        this.slide();
      }, 2500);
    },
    touchStart(e) {
      this.startImg = this.imgs[0].offsetLeft;
      this.start = e.changedTouches[0].clientX;
      this.x2 = e.changedTouches[0].clientX;
      this.loop && clearTimeout(this.sId);
    },
    touchMove(e) {
      this.x1 = this.x2;
      this.x2 = e.changedTouches[0].clientX;
      var x_diff = this.x2 - this.x1;
      this.imgs.forEach(img => {
        img.style.left = img.offsetLeft + x_diff + "px";
      });
    },
    touchEnd(e) {
      this.end = e.changedTouches[0].clientX;
      var x_diff2 = this.end - this.start;
      if (!this.loop) {
        if (
          x_diff2 > 0 &&
          (this.startImg === 0 || this.imgs[0].offsetLeft > 0)
        ) {
          this.imgs.forEach((img, index) => {
            img.style.left = this.widthImg * index + "px";
          });
          return;
        }
        if (
          x_diff2 < 0 &&
          (this.startImg === -(this.widthImg * (this.imgs.length - 1)) ||
            this.imgs[0].offsetLeft < -(this.widthImg * (this.imgs.length - 1)))
        ) {
          this.imgs.forEach((img, index) => {
            img.style.left =
              this.widthImg * (index - this.imgs.length + 1) + "px";
          });
          return;
        }
        if (this.slideStop) {
          return;
        }
      }
      var path;
      if (x_diff2 > 0) {
        path = Math.abs(this.end - this.start) > this.widthImg / 3 ? 1 : 0;
      } else {
        path = Math.abs(this.end - this.start) > this.widthImg / 3 ? 0 : 1;
      }
      this.imgs.forEach(img => {
        img.style.left =
          (Math.floor(img.offsetLeft / this.widthImg) + path) * this.widthImg +
          "px";
        if (this.loop && img.offsetLeft < -this.widthImg) {
          img.style.left =
            img.offsetLeft + this.widthImg * this.imgs.length + "px";
        }
        if (
          this.loop &&
          img.offsetLeft >= this.widthImg * (this.imgs.length - 1)
        ) {
          img.style.left =
            img.offsetLeft - this.widthImg * this.imgs.length + "px";
        }
      });
      this.loop && this.autoSlide();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initWidth);
  }
};
</script>


<style lang="scss" scoped>
$height: 16vh;
.outer-slide {
  height: $height;
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
  .inner-slide {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    flex-shrink: 0;
    // border: 1px solid #21e40f;
    position: absolute;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}
</style>