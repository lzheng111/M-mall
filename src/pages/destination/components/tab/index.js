import './tab.css'

import {getData,getDelayedData} from 'api/getData'
import{URL,TAB_ITEM_CLASS,TAB_ACTIVE_ITEM_CLASS_NAME} from './config'
// https://www.imooc.com/api/mall-wepApp/destination/content/1

class Tab{
  constructor(el){
    this.itemELs = el.querySelectorAll(TAB_ITEM_CLASS)
  }

  setActiveItem(index){
    for(const itemEL of this.itemELs ){
      itemEL.classList.remove(TAB_ACTIVE_ITEM_CLASS_NAME)
    }

    this.itemELs[index].classList.add(TAB_ACTIVE_ITEM_CLASS_NAME)
  }

  to(index){
   //取消上一次请求
    if(this.dataPromise && this.dataPromise.xhr){
      this.dataPromise.xhr.abort()
    }

    this.setActiveItem(index)

    this.dataPromise = getData(`${URL}/${this.itemELs[index].dataset.id}`)
    
    return this.dataPromise
  }
}

export default Tab