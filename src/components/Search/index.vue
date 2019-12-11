<template>
  <div>
    <div v-show='!search' class="search_outer circle small" @click='search = true'>
      <p class="middle"><svg-icon class="search_icon" icon-class="search"></svg-icon></p>
      <p class="middle"><span class="test">{{ placeholder }}</span></p>
    </div>
    <div v-if='search' class="search_outer flex small">
      <div class='search'>
        <search-input :placeholder='placeholder' :value='searchValue' @input="changeInput"></search-input>
      </div>
      <button class="normal" @click='closeSearch'>取消</button>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
export default {
  components: {
    SearchInput
  },
  data(){
    return {
      search: false,
      searchValue: ''
    }
  },
  watch:{
    search(n){
      this.$emit('searchChange', n);
    }
  },
  props: {
    placeholder: {
      default: "请输出要搜索的内容"
    },
    
  },
  methods:{
    changeInput(value, search){
      this.searchValue = value
      search && this.$emit('inputChange', value)
    },
    closeSearch(){
      this.search = false;
      this.searchValue = '';
    }
  }
};
</script>

<style lang="scss" scoped>
$bg-color: #dddddd;
$height: 35px;
.none {
  display: none;
}
.flex {
  display: flex;
}
.circle {
  width: calc(100% - 20px) !important;
  border: 1.2px solid $bg-color;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 0 10px;
  background: $bg-color;
  border: 1px solid red;
}
.search_outer {
  // border: 1px solid blue;
  width: 100%;
  height: $height;
  position: relative;
  // font-size: 0.9rem;
  // line-height: 100%;
  p.middle{
    line-height: $height;
    display: inline-block;
  }
  
  .search_icon {
    width: 20px;
    height: 70%;
    position: relative;
    top: 15%;
    // border: 1px solid #00ff00;
  }
  .search{
    width: calc(100% - 50px);
  }
  button {
    width: 50px;
    height: 100%;
    // font-size: 1rem;
    border: 0;
    background: transparent;
    outline: none;
  }
}
</style>