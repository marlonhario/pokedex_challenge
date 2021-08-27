import React, { useState, useMemo } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Pokedex from './components/Pokedex';
import Loading from './components/Loading';
import Error from './components/Error';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PokemonContext } from './context';

function Routes() {
	const [pokemon, setPokemon] = useState({
		data: [],
		loading: true,
		error: false
	});
	const providerValue = useMemo(() => ({ pokemon, setPokemon }), [pokemon, setPokemon]);
 
  return (
			<PokemonContext.Provider value={providerValue}>
				<Header />
					<Route exact path="/" component={Pokedex} />
					<Route path="/loading" component={Loading} />
					<Route path="/error" component={Error} />
				<Footer />
			</PokemonContext.Provider>
		
  );
}

function App() {
  return (
		<Router>
				<div className="App__container">
					<Routes />
				</div>
		</Router>
  );
}

export default App;


