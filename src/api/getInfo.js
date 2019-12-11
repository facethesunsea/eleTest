import request from '@/utils/request';

export function fetchStore() {
    return request({
        url: '/store/list',
        method: 'get'
    })
}

export function fetchStoreByCheck(query) {
    return request({
        url: '/store/search',
        method: 'get',
        params: query
    })
}

export function fetchCommodity(){
    return request({
        url: '/commodity/list',
        method: 'get'
    })
}

export function fetchCommodityFour(){
    return request({
        url: '/commodity/limit',
        method: 'get'
    })
}