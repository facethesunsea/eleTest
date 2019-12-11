import Mock from 'mockjs';

import store from './store';
import commodity from './commodity';

var mocks = [
    ...store,
    ...commodity
]


// console.log(mocks)

mocks.forEach(mock=>{
    Mock.mock(mock.url, mock.type, mock.response)
})