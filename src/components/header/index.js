import './header.css'

import Scroll from '../../utils/scroll'

// 头部实现滑动变色

const CHANGED_CLASS_NAME = 'header-transition'

class Header{
  constructor(el,critical_point,scrollContainer,eventEL = scrollContainer){
    this.el = el
    new Scroll({
      critical_point,
      change:()=>{
        this.show()
      },
      reset:()=>{
        this.hide()
      }
    },
    scrollContainer,
    eventEL)
  }
 
  // 还原
  hide(){
    this.el.classList.remove(CHANGED_CLASS_NAME)
  }
  
  // 变化
 show(){
    this.el.classList.add(CHANGED_CLASS_NAME)
  }
}

export default Header
