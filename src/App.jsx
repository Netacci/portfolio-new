import Layout from './components/Layout/Layout';
import Hero from './pages/Hero/Hero';
import Credibility from './pages/Credibility/Credibility';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';
import About from './pages/About/About';
import Banner from './pages/Banner/Banner';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Credibility />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Banner />
    </Layout>
  );
};

export default App;
