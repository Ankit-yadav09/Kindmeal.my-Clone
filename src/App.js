import './App.css';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
// import Footer from './components/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menubar/>
      <AllRoutes/>     
      {/* <Footer/> */}
    </div>
  );
}

export default App;
