import React  from 'react';
import './stylesh.css';
import 'typeface-oswald';

import Home from '../../pages/home';
import Ecommerce from '../../pages/ecommerce';
import ProdutosDigitais from '../../pages/produtosdigitais';
import Logo from '../../images/logo.png'

import {
  BrowserRouter  as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const imageL = {
  'margin-top':'10px',
  'width': '190px'  
}

const Header = () => (
    <Router>
      <div>
        <header className="header">
        <Link to="/"><img style={imageL} src={Logo} /></Link>        
          
          <nav>
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ecommerce">E-Commerce</Link></li>
                <li><Link to="/produtosdigitais">Produtos Digitais</Link></li>                
              </ul>
          </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ecommerce">
            <Ecommerce />
          </Route>
          <Route path="/produtosdigitais">
            <ProdutosDigitais />
          </Route>
          <Route path="/teste">
            <Teste />
          </Route>          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
);

// function Home() {
//     return <h2>Home</h2>;
//   }
  
  function About() {
    return <h2>About</h2>;
  }
  
  // function ProdutosDigitais() {
  //   return  <ProdutosDigitais/>;
  // }
  
  function Teste() {
    return <h2>Teste</h2>;
  }

export default Header;
