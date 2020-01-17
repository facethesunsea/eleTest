import Mock from 'mockjs';
// const Mock = require('mockjs');
var store = [];
function getStores() {
    store = [];
    for (var i = 0; i < 100; i++) {
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
            'fullReduction|2-7': ['34减5'],
            extraInfo: '@cword(0,10)',
            commodity: []
        }));
    }
    // console.log(store);
}
// console.log(store)
export default [
    {
        url: '/store/list',
        type: 'get',
        response: _ => {
            getStores();
            return {
                code: 20000,
                data: store.slice(0, 10)
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
            if (!check) {
                // console.log(store)
                return store
            } else {
                var s = store.filter(s => {
                    if (s.shopName.indexOf(check) > -1) {
                        // console.log(s)
                        return s
                    }
                })
                // console.log(s)
                return s
            }

        }
    },
    {
        url: '/store/recommend',
        type: 'post',
        response: (params) => {
            var select = JSON.parse(params.body);
            var index = select.index;
            if(!index){
                getStores();
            }
            return {
                code: 20000,
                select,
                data: store.slice(index, index + 20)
            }
        }
    }
]

