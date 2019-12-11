import Mock from 'mockjs';
// const Mock = require('mockjs');

var store = [];

for (var i = 0; i < 20; i++) {
    store.push(Mock.mock({
        id: '@increment',
        imgSrc: '@image()',
        shopName: '@ctitle(3, 7)',
        rate: '@float(0,5,0,2)',
        numbers: '@integer(1, 2000)',
        startPrice: '@integer(0, 7)',
        fare: '@integer(4, 7)',
        distance: '@float(0,10,0,2)',
        hummer: '@boolean()',
        'fullReduction|1': ['34减5', '35减8', '30减3', '36减15', '38减15', '32减6', '31减17'],
        extraInfo:'@cword(0,10)',
        commodity: []
    }));
}
// console.log(store)
export default [
    {
        url: '/store/list',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: store
            }
        }
    },
    {
        url: /\/store\/search/,
        type: 'get',
        response: config => {
            // console.log(config)
            var check = config.url.split('=')[1]
            check = decodeURI(check)
            // console.log(check)
            if(!check){
                // console.log(store)
                return store
            }else{
                var s = store.filter(s => {
                    if(s.shopName.indexOf(check) > -1){
                        // console.log(s)
                        return s
                    }
                })
                // console.log(s)
                return s
            }
            
        }
    }
]

