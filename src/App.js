import logo from './logo.svg';
import './App.css';
import NavbarSection from './Components/NavbarSection';
import MainSection from './Components/MainSection';
import ThirdComponent from './Components/ThirdComponent';
import AgenciesCard from './Components/AgenciesCard';
import WiningProcessSection from './Components/WiningProcessSection';
import PricingPlan from './Components/PricingPlan';
import GrowTheCompany from './Components/GrowTheCompany';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <MainSection/>
      <ThirdComponent/>
      <AgenciesCard/>
      <WiningProcessSection/>
      <PricingPlan/>
      <GrowTheCompany/>
      <Footer/>
    </div>
  );
}

export default App;
