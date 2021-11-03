import './App.css';
import Pokemon from './Pokemon';
import data from './data';

function App() {
  return (
    <div className="div-Principal">
      <h1>Pokedex</h1>
      <article className="container">
        <Pokemon data={data} />
      </article>

    </div>
  );
}

export default App;
