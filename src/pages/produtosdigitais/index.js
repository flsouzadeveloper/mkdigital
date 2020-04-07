import React from 'react';

import Artesanato from '../../pages/produtosdigitais/artesanato';
import Emagrecimento from '../../pages/produtosdigitais/emagrecimento';
import NichoBlack from '../../pages/produtosdigitais/nichoblack';

import {
    BrowserRouter  as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const containerPD = {    
    // 'height':'180px'
};

const titulo = {
    'text-align': 'center',
    'padding': '65px 0 20px',
    color: '#000'
};

const links = {
    'width':'100%',
    'height':'180px',
    background: 'none'
};

const dContainerArtesanato = {
    'border': '2px solid #F5D5D5',
    'background': '#F5D5D5',
    color: '#958BAD'
};

const dContainerEmagrecimento = {
    'border': '2px solid #05E177',
    'background': '#05E177'
};

const dContainerNichoBlack = {
    'border': '2px solid #010101',
    'background': '#010101',
    color: '#D93025'
};

const ProdutosDigitais = () => (
    <Router>
    <div>
    <div style={containerPD} className="fundoPaginaPD">
        <h2 style={titulo}>Escolha abaixo a Categoria do Produto que deseja Comprar!</h2>
        <div style={links} className="container ">
            <Link style={dContainerArtesanato} to="/produtosdigitais/artesanato">Artesanato</Link>
            <Link style={dContainerEmagrecimento} to="/produtosdigitais/emagrecimento">Emagrecimento</Link>
            <Link style={dContainerNichoBlack} to="/produtosdigitais/nichoblack">Nicho Black</Link>
        </div>
    </div>
    <Switch>
          <Route path="/produtosdigitais/artesanato">
            <Artesanato />
          </Route>
          <Route path="/produtosdigitais/emagrecimento">
            <Emagrecimento />
          </Route>          
          <Route path="/produtosdigitais/nichoblack">
            <NichoBlack />
          </Route>
        </Switch>        
    </div>
    </Router>
);

export default ProdutosDigitais;