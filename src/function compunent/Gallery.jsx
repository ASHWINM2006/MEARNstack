import About from "./FUNCTIONAL COMPONENTS/About";
import Constact from "./FUNCTIONAL COMPONENTS/Contact";
import Gallery from "./FUNCTIONAL COMPONENTS/Gallery";
import Home from "./FUNCTIONAL COMPONENTS/Home";


function App() {
  return (
    <section>
      <About/>
      <Gallery image="sece logo" page="Gallery"/>
      <Home/>
      <Constact/>
    </section>
    
  );
}

export default App;