import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  console.log("Hola mundo");
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
