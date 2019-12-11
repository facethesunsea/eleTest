<template>
  <div class="search_outer">
    <!-- 总结：
            mint-ui的search组件不能满足需求：
              搜索框内的内容不可以设置样式
              取消的事件里自己需要添加操作，但是找不到这个事件
              点击获取焦点或失去焦点时 需要操作
     -->
    <form action v-on:submit.prevent>
      <mt-search class="search" v-model="value" :placeholder="placeholder" @blur='search_show = false' @focus = 'search_show = true'>
        <mt-cell
          class="search_cell"
          v-for="item in result"
          :key="item.id"
          :title="item.title"
          :value="item.value"
        ></mt-cell>
      </mt-search>
    </form>
    <div v-show='search_show'>
<p>TEST   dfbsdf</p>
    <p>TEST    dfgvsdf</p>
    <p>TEST       fgvasdf </p>
    <p>TEST           dfvadfsd</p>
    <p>TESTdfdfvsd   sg gb </p>
    <p>TESTdfvsdfb fsgvb fg</p>
    <p>TESTfgfgb sd fgf</p>
    </div>
    <div v-show='!search_show'>
    <p><i class='mint-toast-icon mintui mintui-search'></i>  TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>

    <p>TEST</p>
    <p>TEST</p>
    <p>TEST</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search_show: false
    }
  },
  props: {
    value: {
      default: ""
    },
    placeholder: {
      default: "搜索"
    },
    result: {
      default: [
        {
          id: 1,
          title: "test1hhhh",
          value: 1
        },
        {
          id: 2,
          title: "test2",
          value: 2
        },
        {
          id: 3,
          title: "test3",
          value: 3
        },
        {
          id: 4,
          title: "test4",
          value: 4
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.search_outer {
  width: 100vw;
  height: 50px;
  // overflow: hidden;
  .search {
    width: 100%;
    height: 50px;
    .search_cell {
      top: 50px;
    }
  }
}
</style>