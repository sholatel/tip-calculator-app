import logo from './images/index'
import './App.css';
import CalculatorParentContainer from './Components/CalculatorParentContainer';
import images from './images';

function App() {
  return (
    <div className="App">
      <img src={images.logo}/>
      <CalculatorParentContainer/>
    </div>
  );
}

export default App;
