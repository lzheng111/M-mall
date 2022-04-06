import './backtop.css'
import '../../assets/icons/iconfont.css'



const CHANGED_CLASS_NAME = 'backtop-hidden'
const INIT_STATE = 'init'
const CHANGED_STATE = 'changed'


class Backtop{
  constructor(el,critical_point,scrollContainer,eventEL = scrollContainer){
    this.el = el
    this.critical_point = critical_point
    // 滚动条所在的容器
    this.scrollContainer = scrollContainer
    // 监听滚动事件的元素
    this.eventEL = eventEL

    this.setState(INIT_STATE)
    this.bindEvent()
  }
// 设置状态
  setState(state){
    this.state = state
}
// 绑定事件
  bindEvent(){
    this.eventEL.addEventListener(
      'scroll',
      ()=>{
      if(this.needChange()){
        this.setState(CHANGED_STATE)
        this.change()
      }else if(this.needReset()){
        this.setState(INIT_STATE)
        this.reset()     
      }
    },false)
    
    this.el.addEventListener('click',()=>{
      this.scrollTo()
    },false)
  }

  scrollTo(top=0,left=0){
    this.scrollContainer.scrollTo({
      top,
      left,
      behavior:'smooth'
    })
  }

  // 还原
  reset(){
    this.el.classList.add(CHANGED_CLASS_NAME)
  }

  // 需要还原
  needReset(){
    return this.state !== INIT_STATE 
    &&this.scrollContainer.scrollTop <= this.critical_point
  }
 

  // 变化
  change(){
    this.el.classList.remove(CHANGED_CLASS_NAME)
  }
  // 需要变化
  needChange(){
    return this.state !== CHANGED_STATE 
    && this.scrollContainer.scrollTop > this.critical_point
  }
 
}

export default Backtop