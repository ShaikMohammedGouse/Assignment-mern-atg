import './App.css';
import FilterGroup from './components/FilterGroup';
import Groups from './components/Groups';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LocationFilter from './components/LocationFilter';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="container-fluid p-0 position-relative">
       <SignUp/>
       <Login/>
     <Header/>
     <HeroSection/>
     <FilterGroup/>

     <div className='justify-content-around p-0 d-none d-md-flex' style={{ margin: "0 10rem", gap: "16vh"}} >
     <Groups/>
     <LocationFilter />
     </div>

     <div className='d-block d-md-none'>
     <Groups/>
     </div>

    
    </div>
  );
}

export default App;
