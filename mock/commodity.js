import Mock from 'mockjs';
// const Mock = require('mockjs');

var commodity = [];

for (var i = 0; i < 20; i++) {
    commodity.push(Mock.mock({
        id: '@increment',
        imgSrc: '@image()',
        name: '@ctitle(3, 7)',
        price: '@float(0,5,0,2)',
        monthlySale: '@integer(1, 300)',
        favorableRate: '@integer(0, 7)',
        description: '@cword(4, 7)'
    }));
}
// console.log(commodity)
export default [
    {
        url: '/commodity/list',
        type: 'get',
        response: _ =>{
            return {
                code: 20000,
                data: commodity
            }
        }
    },
    {
        url: '/commodity/limit',
        type: 'get',
        response:_=>{
            return commodity.slice(0, 4)
        }
    }
]