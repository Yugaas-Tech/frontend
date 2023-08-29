import './App.css';
import Navbar from './home/Navbar';
import Layout from './home/Layout'
import FoodLayout from './foodProducts/FoodLayout';
import AboutLayout from './aboutUs/AboutLayout';
import ReligiousStoreLayout from './religiousStore/ReligiousStoreLayout';
import SubsidisedLayout from './SubsidisedFood/SubsidisedLayout';
import SocialInitiativesLayout from './socialInitiatives/SocialInitiativesLayout';
import BookPageLayout from './bookPage/BookPageLayout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
       <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/about' element={<AboutLayout/>}/>
          <Route path='/foodproducts' element={<FoodLayout/>}/>
          <Route path='/ReligiousStore' element={<ReligiousStoreLayout/>}/>
          <Route path='/Books' element={<BookPageLayout/>}/>
          <Route path='/SubsidizedFood' element={<SubsidisedLayout/>}/>
        </Routes>
       </Router>
     
    </div>
  );
}

export default App;
