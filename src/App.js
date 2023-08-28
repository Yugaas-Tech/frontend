import './App.css';
import Layout from './home/Layout'
import FoodLayout from './foodProducts/FoodLayout';
import AboutLayout from './aboutUs/AboutLayout';
import ReligiousStoreLayout from './religiousStore/ReligiousStoreLayout';
import SubsidisedLayout from './SubsidisedFood/SubsidisedLayout';
import SocialInitiativesLayout from './socialInitiatives/SocialInitiativesLayout';
import BookPageLayout from './bookPage/BookPageLayout';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookPageLayout/>
      </header>
    </div>
  );
}

export default App;
