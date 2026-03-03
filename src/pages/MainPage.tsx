import '@/App.css';
import { ABOUT, HERO_SECTION, WORK } from '@fixtures/mainPage.fixture';
import LayoutPage from '@/layoutPage/index';
import HeroSection from '@components/common/pageComponents/HeroSection';
import AboutHero from '@components/common/pageComponents/AboutHero';
import WorkSection from '@components/common/pageComponents/WorkSection';

function MainPage() {
  return (
    <LayoutPage>
      <HeroSection items={HERO_SECTION} />
      <AboutHero
        id={ABOUT.id}
        title={ABOUT.title}
        text={ABOUT.text}
        languages={ABOUT.languages}
        skills={ABOUT.skills}
      />
      <WorkSection
        id={WORK.id}
        title={WORK.title}
        experience={WORK.experience}
        projects={WORK.projects}
      />
    </LayoutPage>
  );
}

export default MainPage;
