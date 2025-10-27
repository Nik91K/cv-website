import './App.css'
import LayoutPage from './layoutPage/index'
import HeroSection from './components/common/pageComponents/HeroSection'
import AboutHero from './components/common/pageComponents/AboutHero'

function App() {

  return (
    <LayoutPage>
      <HeroSection />
      <AboutHero />
    </LayoutPage>
  )
}

export default App
