import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacao from './Componentes/BarraNavegacao';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import ListaLivros from './Componentes/ListaLivros';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreatUpdate from './Componentes/CreatUpdate';

function App() {
  return (
    <div>
      <Router>
        <BarraNavegacao /> 
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Livros" component={ListaLivros}></Route>
          <Route path="/Livros/:id" component={CreatUpdate}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
