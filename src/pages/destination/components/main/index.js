import './main.css'
import Tab from '../tab'
import Content from '../content'
import 'components/loading'
import { set, get } from '../../../../utils/sessionStorage'


const tabEL = document.querySelector('.tab')
const tab = new Tab(tabEL)
const content = new Content(document.getElementById('destination-content'))

const itemELs = tabEL.querySelectorAll('.tab-item')

tabEL.addEventListener('click', ev => {
  const itemEL = ev.target

  if (itemEL.classList.contains("tab-item")) {

    const index = itemEL.dataset.id - 1

    const storageName = `destination_content_${index}`
    const storageContent = get(storageName)

    if (storageContent) {
      tab.setActiveItem(index)
      content.set(storageContent)
    } else {
      const tabPromist = tab.to(index)

      content.setLoading()

      tabPromist.then(data => {
        content.set(data)
        set(storageName,data)
      })
    }
  }
}, false)

itemELs[0].click()

// tab.setActiveItem(5)
// tab.to(2)

// tab.to(0).then(data =>{
//   content.set(data)
// })
