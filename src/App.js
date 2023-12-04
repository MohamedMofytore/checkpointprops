import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';


function App() {
  var title="cards"
  var price=256
  return (
   <>
   <PlayersList asia={title} price={price}/>
  </> 
  );
}

export default App;
