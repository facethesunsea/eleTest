<template>
  <div class="search-inner">
    <svg-icon class="search-icon" icon-class="search"></svg-icon>
    <input
      class="input-search"
      :value="inputValue"
      @input="$emit('input-search', $event.target.value, searchStart)"
      @compositionstart="searchStart=false"
      @compositionend="searchStart=true"
      :placeholder="placeholder"
      v-focus
    />
    <svg-icon
      :class="{'close-icon':true, none:!(inputValue.length) && showClose}"
      icon-class="close"
      @click="$emit('input-search', '', searchStart)"
    ></svg-icon>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      searchStart: true
    };
  },
  props: {
    placeholder: {
      default: "搜索"
    },
    inputValue: {
      default: ""
    },
    showClose: {
      default: true
    }
  },
  watch: {
    searchStart(value) {
      if (value) {
        this.$emit("input-search", this.inputValue, this.searchStart);
      }
    }
  },
  directives: {
    focus: {
      inserted: el => {
        el.focus();
      },
      update: el => {
        el.focus();
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
$height: 30px;
$background-color: #dddddd;
.none {
  display: none;
}
.search-inner {
  background: $background-color;
  width: 100%;
  height: $height;
  border: 1.2px solid $background-color;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  .search-icon,
  .close-icon {
    width: 20px;
    height: 70%;
    position: absolute;
    top: 15%;
  }
  .search-icon {
    left: 10px;
  }
  .close-icon {
    right: 10px;
  }
  .input-search {
    background: $background-color;
    display: inline-block;
    position: absolute;
    left: 30px;
    box-sizing: border-box;
    height: 100%;
    width: calc(100% - 60px);
    font-size: 0.9rem;
    line-height: 100%;
    border-style: none;
    text-align: left;
    outline: none;
    padding: 0 3px;
  }
}
</style>