import './App.css'
import LayoutPage from './layoutPage/index'
import HeroSection from './components/common/pageComponents/HeroSection'
import AboutHero from './components/common/pageComponents/AboutHero'
import WorkSection from './components/common/pageComponents/WorkSection'

function App() {

  return (
    <LayoutPage>
      <HeroSection />
      <AboutHero />
      <WorkSection />
    </LayoutPage>
  )
}

export default App
