import './backtop.css'
import '../../assets/icons/iconfont.css'

import Scroll from '../../utils/scroll'

const CHANGED_CLASS_NAME = 'backtop-hidden'

class Backtop {
  constructor(el, critical_point, scrollContainer, eventEL = scrollContainer) {
    this.el = el
    this.critical_point = critical_point
    // 滚动条所在的容器
    this.scrollContainer = scrollContainer

    new Scroll(
      {
        critical_point,
        change: () => {
          this.show()
        },
        reset: () => {
          this.hide()
        }
      },
      scrollContainer,
      eventEL
      )

    // 绑定事件
    this.bindEvent()
  }



  // 绑定事件
  bindEvent() {
    this.el.addEventListener('click', () => {
      this.scrollTo()
    }, false)
  }

  scrollTo(top = 0, left = 0) {
    this.scrollContainer.scrollTo({
      top,
      left,
      behavior: 'smooth'
    })
  }

  //隐藏
  hide() {
    this.el.classList.add(CHANGED_CLASS_NAME)
  }


  // 显示
  show() {
    this.el.classList.remove(CHANGED_CLASS_NAME)
  }

}

export default Backtop