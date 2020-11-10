import './App.css';
import Data from './data';
import Pokedex from './components/Pokedex'

function App() {
  return (
    <section className="App">
    <div className="pokedex">
      <Pokedex pokemon={Data} />
    </div>
    </section>
  );
}

export default App;
