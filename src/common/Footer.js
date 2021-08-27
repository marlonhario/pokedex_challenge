import React, { useContext } from 'react'
import { PokemonContext } from '../context'

function Footer() {
	const { pokemon } = useContext(PokemonContext);
	const { error, loading } = pokemon;

	const content = [
		<p>Copyright © {new Date().getFullYear()} React Code Challenge. All Rights Reserved.<br />
			Use of pokemon images performed under fair use. Not for<br />
			sale or redistribution</p>,
		<p>Copyright © {new Date().getFullYear()} React Code Challenge. All Rights Reserved.</p>
	]

	return (
		<div className="Footer__container">
			{ error === true || loading === true ? content[1] : content[0]}
		</div>
	)
} 

export default Footer;
