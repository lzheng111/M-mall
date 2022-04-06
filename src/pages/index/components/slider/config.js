// Swiper配置

export default{
  direction:'horizontal' ,// 垂直切换选项
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  
  // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
}

export const SWITCH_CONTAINER_CLASS = '.swiper'
export const URL = 'https://www.imooc.com/api/mall-wepApp/index/slider'
export const LAYOUT_ID = 'index-slider'