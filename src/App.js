import './App.css';
import Eq from './components/Eq';
import Eqiq from './components/Eqiq';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Improvement from './components/Improvement';
import Meet from './components/Meet';
import Navbar from './components/Navbar';
import Socialskills from './components/Socialskills';
import Soundcard from './components/Soundcard';
import Start from './components/Start';
import Vacancies from './components/Vacancies';
import Work from './components/Work';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Eq />
      <Soundcard />
      <Meet/>
      <Improvement/>
      <Eqiq/>
      <Socialskills/>
      <Start/>
      <Work/>
      <Vacancies/>
      <Footer/>
    </>
  );
}

export default App;
