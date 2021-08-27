import React from 'react'

function Card({ data, color }) {
	const source = require(`../assets/images/${data.image.src}`).default;
	const identity = data.image.src.split(".")[0];
	const imageAttributes = {
		...data.image,
		src: source,
	}

	return (
		<div className="Card__container">
			<div>
				<img {...imageAttributes} alt={data.name} />
			</div>
			<div> 
				<h2>#{identity}</h2>
			</div>
			<div>	
				<h3>{data.name}</h3>
			</div>
			<div className={`${data.types.length > 1 ? "button-container" : ""}`}>	
				{data.types.map((type, index) => (
					<button key={index} style={{background: color[type]}}>{type}</button>
				))}
			</div>
		</div>	
	)
}

export default Card;
