<template>
  <div class="svg-outer" :class="outerName">
    <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    },
    outerName: {
      type: String,
      default: "normal-size"
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-outer {
  display: inline-block;
  //   font-size: 20px;
  //   line-height: 20px;
  vertical-align: middle;
  // border: 1px solid red;
  //   svg {
  //     width: 20px;
  //     height: 20px;
  //     // border: 1px solid green;
  //   }
}
.normal-size {
  font-size: 20px;
  line-height: 20px;
  svg {
    width: 20px;
    height: 20px;
    // border: 1px solid green;
  }
}
.small-size {
  font-size: 10px;
  line-height: 10px;
  svg {
    width: 12px;
    height: 12px;
    // border: 1px solid green;
  }
}
.smaller-size {
  font-size: 7px;
  line-height: 7px;
  svg {
    width: 7px;
    height: 7px;
    // border: 1px solid green;
  }
}
</style>