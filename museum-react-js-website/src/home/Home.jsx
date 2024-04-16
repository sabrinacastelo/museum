import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Skills from "../components/Skills/Skills";
import Stats from "../components/Stats/Stats";
import Work from "../components/Work/Work";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import "../App.css"

const Home = () => {
  console.log('Componente Home está sendo renderizado');

  return(
    <>
      <Header />
      <AboutUs />
      <Skills />
      <Stats />
      <Work />
      <WorkProcess />
      <Contact />
      <Footer />
    </>
  )
};
export default Home;

