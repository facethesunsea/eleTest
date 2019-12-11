<template>
<button class="smaller" :class="[classCheck]">{{ value }}</button>
    
</template>

<script>
export default {
    props:{
        value:{
            default: '',
            required: true
        },
        classCheck:{
            default: 'blue'
        }
    }
}
</script>

<style lang="scss" scoped>
$height: 10vw;
button{
    max-width: 100%;
    // font-size: 0.7rem;
    color: #ffffff;
    border: 0;
    box-sizing: border-box;
    line-height: 0.7rem;
    border-radius: 2px;
    padding: 1px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
}
.common{
    color: #666666;
    background: #dddddd;
    padding: 1rem;
    line-height: 0;
}
.reduct{
    color: red;
    background: white;
    border: 1px solid red;
    padding: 0.2rem 0.4rem;
}
.red{
    background: #ff0000;
}
.blue{
    background: #0000ff;
}
.green{
    background: #00ff00;
}
</style>