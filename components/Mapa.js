import './css/Map.css'; 
import SvgMap from './map';


function App() {

  return (
    <div className="App">
      
      <h1 className="title">Choose an Art Room</h1>
      <h3 className="subtitle">Click on the room you want to explore</h3>

      <div className="Map">
        <SvgMap />
      </div>
        
    </div>
  );
}

export default App;
