<template>
    <div class="outer-shop-simple">
        <div class='image'>
            <img :src="imageSrc">
        </div>
        <div class="shop-simple-content">
            <div class="shop-name normal">
                <span>{{ shopName }}</span>
                <mark-button v-if='fullReduction' class='margin-left' value="满减" class-check="red"></mark-button>
                <mark-button v-if='hummer' class='margin-left' value="蜂鸟"></mark-button>
            </div>
            <div class="smaller">
                <div v-if='!addShow'><span>评分{{ rate }}</span> | <span>月售{{ numbers }}单</span> | <span>{{ distance }}km</span></div>
                <mark-button v-else :value="addInfo" class-check="green"></mark-button>
            </div>
        </div>

    </div>

</template>

<script>
import MarkButton from '@/components/MarkButton'
export default {
    components:{
        MarkButton
    },
    data(){
        return {
            addInfo: '商家有其他要显示的东西'
        }
    },
    props:{
        imageSrc:{
            default: '',
            // required: true
        },
        shopName:{
            default: '商店名称',
            // required: true
        },
        rate:{
            default: 0,
            // required: true
        },
        numbers:{
            default: 0,
            // required: true
        },
        distance:{
            default: 0,
            // required: true
        },
        hummer:{
            default: false
        },
        fullReduction:{
            default: false
        },
        addShow:{
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
$height:10vw;
.outer-shop-simple{
    padding: 10px;
    padding-bottom: 6px;
    display: flex;
    border-bottom: 1px solid #dddddd;
    .image{
        width: $height;
        min-width: $height;
        height: $height;
        padding: 5px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .shop-simple-content{
        height: $height;
        margin-left: 5px;
        position: relative;
        letter-spacing: 0.5px;
        .shop-name{
            font-size: 1rem;
            line-height: 1.5;
        }
        .margin-left{
            margin-left: 1vw;
        }
    }
}

</style>