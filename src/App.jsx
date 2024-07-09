import Layout from './components/Layout/Layout';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Projects';
import Banner from './pages/Banner/Banner';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Banner />
    </Layout>
  );
};

export default App;
