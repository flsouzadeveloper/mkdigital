import React from 'react';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';

import {
  BrowserRouter  as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
      <div>
        <Header/>
        <Footer />
      </div>
  );
}

export default App;
