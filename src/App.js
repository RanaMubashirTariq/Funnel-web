import logo from './logo.svg';
import './App.css';
import NavbarSection from './Components/NavbarSection';
import MainSection from './Components/MainSection';
import ThirdComponent from './Components/ThirdComponent';
import AgenciesCard from './Components/AgenciesCard';

function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <MainSection/>
      <ThirdComponent/>
      <AgenciesCard/>
    </div>
  );
}

export default App;
