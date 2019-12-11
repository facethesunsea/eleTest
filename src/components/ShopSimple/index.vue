<template>
    <div class="outer-shop-simple">
        <div class='image'>
            <img :src="imageSrc">
        </div>
        <div class="content">
            <div class="shop_name normal">
                <span>{{ shopName }}</span>
                <mark-button v-if='fullReduction' class='margin-left' value="满减" class-check="red"></mark-button>
                <mark-button v-if='hummer' class='margin-left' value="蜂鸟"></mark-button>
            </div>
            <div class="info smaller">
                <p v-if='!addShow'><span>评分{{ rate }}</span> | <span>月售{{ numbers }}单</span> | <span>{{ distance }}km</span></p>
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
            required: true
        },
        shopName:{
            default: '',
            required: true
        },
        rate:{
            default: '',
            required: true
        },
        numbers:{
            default: '',
            required: true
        },
        distance:{
            default: '',
            required: true
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
    // border: 1px solid #ff0000;
    padding: $height/4;
    width: 100vw;
    height: $height + $height/2;
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #dddddd;
    .image{
        width:$height;
        min-width: $height;
        height:$height;
        position: relative;
        img{
            width: 80%;
            height: 80%;
            position: absolute;
            top: 10%;
            left: 10%;
        }
    }
    .content{
        width: 100vw - $height/2 - $height;
        height: $height;
        box-sizing: border-box;
        text-align: left;
        line-height: $height/2;
        padding-left: $height/4;
        .shop_name{
            // font-size: 1rem;
            width: 100%;
            line-height: $height / 2;
            height: $height / 2;
        }
        .info{
            // font-size: 0.7rem;
            width: 100%;
            height: $height / 3;
        }
        .margin-left{
            margin-left: 1vw;
        }
    }
    
}

</style>