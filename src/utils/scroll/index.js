import {INIT_STATE,CHANGED_STATE} from './cpnstants'
import DEFAULTS from './defaults'

class Scroll{
  constructor(
    options,
    scrollContainer,
    eventEL = scrollContainer){
    this.options = Object.assign({},DEFAULTS,options)
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
    const {change,reset} = this.options
    this.eventEL.addEventListener(
      'scroll',
      ()=>{
      if(this.needChange()){
        this.setState(CHANGED_STATE)
        if(typeof change ==='function'){
          change()
        }
        
      }else if(this.needReset()){
        this.setState(INIT_STATE)
        if(typeof change ==='function'){
         reset()
        }   
      }
    },false)  
  }

  // 需要还原
  needReset(){
    return this.state !== INIT_STATE 
    &&this.scrollContainer.scrollTop <= this.options.critical_point
  }
 
  // 需要变化
  needChange(){
    return this.state !== CHANGED_STATE 
    && this.scrollContainer.scrollTop > this.options.critical_point
  }
}

export default Scroll
