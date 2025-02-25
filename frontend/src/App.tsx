
import './App.css'
import Hero from './Components/Hero/Hero'
import Expertise from './Components/Expertise/Expertise'
import CustomParallax from './Components/Parallax/Parallax'
import Discovery from './Components/Discovery/Discovery'

function App() {


  return (
    <div className='overflow-x-hidden'>

     <Hero/>
     <Expertise/>
     <CustomParallax/>
     {/* <Discovery/> */}
    </div>
  )
}

export default App
