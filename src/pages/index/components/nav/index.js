import './nav.css'

import runder from './nav.art'
import{getData,getDelayedData} from 'api/getData'

import{URL,LAYOUT_ID} from './config'


// https://www.imooc.com/api/mall-wepApp/index/nav
getData(URL)
.then(data =>{
  document.getElementById(LAYOUT_ID).innerHTML = runder({
    items:data
  })
})
