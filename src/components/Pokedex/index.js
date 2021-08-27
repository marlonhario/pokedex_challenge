import React, { useContext, useEffect } from 'react'
import data from '../../data/pokemon.json';
import Card from '../../common/Card';
import Error from '../Error';
import Loading from '../Loading';
import { PokemonContext } from '../../context'

function Pokedex() {
	const { pokemon, setPokemon } = useContext(PokemonContext);
	const { data: pokemons, error, loading } = pokemon;

	const displayPokemons = (
		<div className="Pokedex__container">
			{pokemons.map((value, index) => (
				<Card key={index} data={value} color={data.typesColor} />
			))}
		</div>
	);

	useEffect(() => {
		try {
			setPokemon({
				...pokemon,
				data: data.entries
			});
		} catch (error) {
			setPokemon({
				...pokemon,
				error: true
			});
		} finally {
 			setPokemon({	
				...pokemon,
				data: data.entries,
				loading: false
			});
		}
	}, []);

	return loading === true ? <Loading /> : pokemons.length > 0 || error === true ? displayPokemons : <Error />;
} 

export default Pokedex;
