
import './App.css';
import BannerGridComp from './components/BannerGridComp';
import BlogGridComp from './components/BlogGridComp';
import FolioGridComp from './components/FolioGridComp';
import FooterGridComp from './components/FooterGridComp';
import HeaderComp from './components/HeaderComp';

function App() {
  return (    
      
        <div id="layout">
          <div className="Grid" >
            <HeaderComp />   {/* class component */}
            <BannerGridComp />
            <FolioGridComp />
            <BlogGridComp />
            <FooterGridComp />          
          </div> 
        </div>
    
  );
}

export default App;
