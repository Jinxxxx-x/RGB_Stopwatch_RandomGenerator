import './App.css';
import Timer from './view/cronometro';
import {BrowserRouter ,Route, Link, Switch} from "react-router-dom";
import Cores from './view/cores';
import Filmes from './view/tema';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/" id="name">JellyBeans.com</Link >
          
          <nav>
            <Link to="/Cronômetro" id="FundoTimer">Cronômetro</Link>
            <Link to="/Paleta" id="FundoColor">RGB</Link>
            <Link to="/Filmes" id="FundoGames">HeartMemes</Link>
          </nav>
        </header>

          <div className="App-back-main">
            <Switch>
              <Route exact path="/">
                <div id="img">
                <img src="https://www.squadhelp.com/story_images/visual_images/1614775018-jelly-beans-logo.jpg" alt= "jujubas rosas"></img>                
                <h1>Sistema JellyBeans: fácil de utilizar, fofo para apreciar</h1>
    </div>
                
              </Route>
              <Route exact path="/Cronômetro">
                <Timer  />
              </Route>
              <Route exact path="/Paleta">
                <Cores />
              </Route>
              <Route exact path="/Filmes">
                <Filmes />
              </Route>
            </Switch>
          </div>

        <footer className="App-footer">
          Sabrina da Paz Alves | 3°CI
        </footer>
      </div>
      </BrowserRouter>
  );
}

export default App;
