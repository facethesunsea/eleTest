<template>
  <div>
    <search
      @input-show-change="inputShow=$event"
      @input-search="searchStore"
      :forbid-search="forbidSearch"
    ></search>
    <div v-if="inputShow" class="search-result">
      <shop-simple
        v-for="item in exampleStores"
        :key="item.id"
        :image-src="item.imageSrc"
        :shopName="item.shopName"
        :rate="item.rate"
        :numbers="item.numbers"
        :distance="item.distance"
        :hummer="item.hummer"
        :fullReduction="item.fullReduction"
        :addShow="item.extraInfo"
      ></shop-simple>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import ShopSimple from "@/components/ShopSimple";
import { fetchStore, fetchStoreByCheck } from "@/api/getInfo";
export default {
  components: {
    Search,
    ShopSimple
  },
  data() {
    return {
      inputShow: false,
      exampleStores: [],
    };
  },
  watch: {
    inputShow(n) {
      this.$emit("input-status", n);
    }
  },
  props: {
    forbidSearch: {
      type: Boolean,
      default: false
    }
  },
  created() {
    fetchStore()
      .then(response => {
        // console.log(response.data.data)
        this.exampleStores = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    searchStore(data) {
      fetchStoreByCheck({
        check: data
      })
        .then(response => {
          // console.log(response.data)
          this.exampleStores = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>