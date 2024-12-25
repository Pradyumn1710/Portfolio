import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './mycomponents/Header'
import Hero_Header from './mycomponents/Hero_Header'
import Intro from './mycomponents/Intro'
import Tech from './mycomponents/Tech'
import Footer from './mycomponents/Footer'

function App() {
  return <div>
     <BrowserRouter>
    <Header></Header>
    </BrowserRouter>
    <Hero_Header></Hero_Header>
    {/* <Intro></Intro> */}
    {/* <Tech></Tech>  */}
    <Footer></Footer>
  </div>
}

export default App
