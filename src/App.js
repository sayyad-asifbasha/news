// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TopHeadlinesNews from './Components/Top_Headlines_News';
import Footer from './Components/Footer';
import Political from './Components/Political_News'
import Business from './Components/Business_News'
import Entertainment from './Components/Entertainment_News'
import Technology from './Components/Technology_News'
import Sports from './Components/Sports_News'
import Tollywood from './Components/Tollywood_News'

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path='/' element={<TopHeadlinesNews/>} />
        <Route path='/Political' element={<Political />} />
        <Route path='/Business' element={<Business />} />
        <Route path='/Entertainment' element={<Entertainment />} />
        <Route path='/Technology' element={<Technology />} />
        <Route path='/Sports' element={<Sports/>} />
        <Route path='/Tollywood' element={<Tollywood/>} />

      </Routes>
      {/* <Scrap/> */}
      <Footer /> 






    </>
  );
}

export default App;
