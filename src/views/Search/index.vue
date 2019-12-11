<template>
    <div>
        <search @searchChange='search=$event' @inputChange="searchStore"></search>
        <div v-if="search" class="search_result">
            <shop-simple 
             v-for="item in test2"
             :key="item.id"
             :image-src="item.imageSrc"
             :shopName="item.shopName"
             :rate="item.rate"
             :numbers="item.numbers"
             :distance="item.distance"
             :hummer="item.hummer"
             :fullReduction="item.fullReduction"
             :addShow="item.extraInfo"
             >
            </shop-simple>
        </div>
        <div v-else>
            <p>OTHER</p>
        </div>
    </div>
</template>

<script>
import Search from '@/components/Search';
import ShopSimple from '@/components/ShopSimple';
import { fetchStore, fetchStoreByCheck } from '@/api/getInfo'
export default {
    components:{
        Search,
        ShopSimple
    },
    data(){
        return {
            search: false,
            test:[
                {
                    id: 1,
                    imageSrc:'',
                    shopName:'名dfsdf本地',
                    rate:'4.2',
                    numbers:'3434',
                    distance:'2.3',
                    hummer:true,
                    fullReduction:true,
                    addShow:false
                },
                {
                     id: 2,
                    imageSrc:'',
                    shopName:'名dfsdf本地',
                    rate:'4.2',
                    numbers:'3434',
                    distance:'2.3',
                    hummer:true,
                    fullReduction:true,
                    addShow:false
                },
                {
                     id: 3,
                    imageSrc:'',
                    shopName:'名dfsdf本地',
                    rate:'4.2',
                    numbers:'3434',
                    distance:'2.3',
                    hummer:true,
                    fullReduction:true,
                    addShow:false
                },
                {
                     id: 4,
                    imageSrc:'',
                    shopName:'名dfsdf本地',
                    rate:'4.2',
                    numbers:'3434',
                    distance:'2.3',
                    hummer:true,
                    fullReduction:true,
                    addShow:false
                },
            ],
            test2: []
        }
    },
    props:{

    },
    created(){
        fetchStore()
        .then((response)=>{
            // console.log(response.data.data)
            this.test2 = response.data.data
        })
        .catch(error=>{
            console.log(error)
        })
    },
    watch:{
    },
    methods: {
        searchStore(value){
            // console.log('TEST     ' + value)
            fetchStoreByCheck({
                check: value
            })
            .then((response)=>{
                // console.log(response.data)
                this.test2 = response.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>