<template>
  <div ref="searchComponent">
    <div v-show="!inputShow" class="search-outer circle small" @click="changeSpanToInput">
      <!-- <div class="middle">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
      </div>
      <div class="middle">
        <span class="span-place">{{ placeholder }}</span>
      </div>-->
      <div class="center-place" :class="{'left-place': centerToLeft}">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <span>{{ placeholder }}</span>
      </div>
    </div>
    <div v-if="inputShow" class="search-outer flex small">
      <div class="search-input">
        <search-input
          :placeholder="placeholder"
          :input-value="searchValue"
          @input-search="inputChangeSearch"
        ></search-input>
      </div>
      <button class="normal" @click="closeSearch">取消</button>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
export default {
  components: {
    SearchInput
  },
  data() {
    return {
      inputShow: false,
      searchValue: "",

      centerToLeft: false
    };
  },
  props: {
    placeholder: {
      default: "请输出要搜索的内容"
    },
    forbidSearch: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    inputShow(n) {
      this.$emit("input-show-change", n);
    }
  },
  methods: {
    inputChangeSearch(value, searchStart) {
      this.searchValue = value;
      searchStart && this.$emit("input-search", this.searchValue);
    },
    closeSearch() {
      this.inputShow = false;
      this.searchValue = "";
      this.centerToLeft = false;
      this.$emit("input-search", this.searchValue);
    },
    changeSpanToInput() {
      this.centerToLeft = true;
      setTimeout(()=>{
        this.inputShow = !this.forbidSearch;
      }, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
$bg-color: #dddddd;
$height: 30px;
.none {
  display: none;
}
.flex {
  display: flex;
}
.circle {
  border: 1.2px solid $bg-color;
  box-sizing: border-box;
  border-radius: 20px;
  background: $bg-color;
}
.search-outer {
  width: 100%;
  height: $height;
  position: relative;
  line-height: $height;
  .center-place {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: left 0.3s ease, transform 0.3s ease;
    span{
      padding-left: 1px;
    }
    &.left-place {
      left: 3%;
      transform: translateX(0);
    }
    .search-icon {
      width: 20px;
      height: 70%;
      position: relative;
      top: -5%;
    }
  }
  .search-input {
    width: calc(100% - 50px);
  }
  button {
    width: 50px;
    height: 100%;
    border: 0;
    background: transparent;
    outline: none;
  }
}
</style>