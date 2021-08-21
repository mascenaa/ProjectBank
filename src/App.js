import Header from './components/header/header'
import Cards from './components/cards/CardInvestimento'
import Options from './components/options/options'
import Credit from './components/creditcards/credit'
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/components/header/modal.css';

import wallpaperfirst from '../src/img/wallpaperfirst.svg';
import wallpaperfundo from '../src/img/wallpaperfundo.svg';
import ad from '../src/img/ad.svg';


export default function App() {

  return (
    <main className="body">
      <section>
        <Header />
        <Cards />
    <Options />
      </section>
      <footer>
        <img className="background-first" src={wallpaperfirst} />
        <img className="background-second" src={wallpaperfundo} />
      </footer>
    </main>
  );
};