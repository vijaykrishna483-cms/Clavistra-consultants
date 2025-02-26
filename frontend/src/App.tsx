
import './App.css'
import Hero from './Components/Hero/Hero'
import Expertise from './Components/Expertise/Expertise'
import CustomParallax from './Components/Parallax/Parallax'
import Discovery from './Components/Discovery/Discovery'
import Features from './Components/Features/Features'
import Companies from './Components/Companies/Companies'
import Projects from './Components/LatestProjects/projects'
import News from './Components/News/News'
import Team from './Components/Team/Team'
import Contact from './Components/Contactus/Contact'
import Footer from './Components/Footer/Footer'
function App() {


  return (
    <div className='overflow-x-hidden'>

     <Hero/>
     <Expertise/>
     <CustomParallax/>
     <Discovery onPrev={function (): void {
        throw new Error('Function not implemented.')
      } } onNext={function (): void {
        throw new Error('Function not implemented.')
      } } />
     <Features/>
     <Companies/>
     <Projects/>
     <News/>
     <Team/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
