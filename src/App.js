import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';
import ActionContainer from './components/ActionContainer';
import SlideUp from './components/SlideUp'
import Hireme from './components/Hireme';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Banner />
       <Skills />
       <Hireme />
      {/* <Contact/> */}
 
      
      <CountdownTimer />
      <ActionContainer />
      <SlideUp />
      <Footer />
    </div>
  );
}

export default App;
