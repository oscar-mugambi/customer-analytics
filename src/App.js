import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import Attributes from './Components/Attributes/Attributes';
import Events from './Components/Events/Events';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Cards />
      <Chart />
      <Attributes />
      <Events />
    </div>
  );
}

export default App;
