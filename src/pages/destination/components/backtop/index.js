import Backtop from "../../../../components/backtop";


const backtopEL = document.querySelector('.backtop')
const scrollContainer = document.getElementById('destination-content')


new Backtop(backtopEL,scrollContainer.offsetHeight,scrollContainer)