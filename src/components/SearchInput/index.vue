<template>
  <div class="search_inner">
    <svg-icon class="search_icon" icon-class="search"></svg-icon>
    <input
      class="input_search"
      :value="value"
      @input="$emit('input', $event.target.value, search)"
      @compositionstart="search=false"
      @compositionend="search=true"
      :placeholder="placeholder"
      v-focus
    />
    <svg-icon
      :class="{close_icon:true, none:!(value.length) && show}"
      icon-class="close"
      @click="$emit('input', '', search)"
    ></svg-icon>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data(){
    return {
      search: true
    }
  },
  props: {
    placeholder: {
      default: "搜索"
    },
    value: {
      default: ""
    },
    show: {
      default: true
    }
  },
  watch:{
    search(value){
      if(value){
        this.$emit('input', this.value, this.search)
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
  methods: {
  }
};
</script>

<style lang="scss" scoped>
$height: 35px;
$background-color: #dddddd;
.none {
  display: none;
}
.search_inner {
  background: $background-color;
  width: calc(100% - 20px);
  height: $height;
  border: 1.2px solid $background-color;
  box-sizing: border-box;
  margin: 0 10px 0 10px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  .search_icon,
  .close_icon {
    width: 20px;
    height: 70%;
    position: absolute;
    top: 15%;
    // border: 1px solid #00ff00;
  }
  .search_icon {
    left: 10px;
  }
  .close_icon {
    right: 10px;
  }
  .input_search {
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
    // border: 1px solid #ff00ff;
    text-align: left;
    outline: none;
    padding: 0 3px;
  }
}
</style>