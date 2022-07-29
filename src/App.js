import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import Services from './pages/servicios/Services';
import ServicesDetails from './pages/servicesDetails/ServicesDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:id' element={<ServicesDetails />} />>
        </Routes>   
        <Footer /> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
