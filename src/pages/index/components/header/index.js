import Header from "../../../../components/header"
import '../../../../components/searchbox/index'

const scrollContainer = document.getElementById('index-page')
const headerEL = scrollContainer.querySelector('.header')

new Header(headerEL,0,scrollContainer)