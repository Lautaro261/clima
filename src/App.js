import './App.css';
import Cards from './componentes/Cards.jsx';
import Card from './componentes/Card.jsx';

function App() {
  return (
    <div className="App">
      <Cards text='Esto es una props'></Cards>
      <Card name='hola (App)' max='25' min='3' imagen='XimagenX'></Card>
    </div>
  );
}

export default App;
