

const container = document.querySelector('.container')


let api = {
	main: 'https://pokeapi.co/api/v2/pokemon'
}




window.addEventListener('load', () => {
	setDate(api.main).then((data) => {
		console.log(data);
		const temp = data.results.map((pokemon) => CardTitle(pokemon)).join(' ');
		container.innerHTML = temp;
		
	
	})
})




const setDate = (url) => 
	fetch(url) 
	  .then((res) => res.json())





function CardTitle(pokemon) {
	return `
	<div class="title_card" onClick="setInfoPokemon('${pokemon.url}')">
	  <div class="title_text">
		  <h1 class="title_h1" >${pokemon.name}</h1>
		</div>
	</div>`
}





const setInfoPokemon = (url) => {
	setDate(url).then(data => container.innerHTML = CardPokemon(data))
}


function CardPokemon(info) {

	console.log(info)
	return`
	<div class="card_info">
	<buttom class="reload" onClick="reloadWindowFunc()">Back</buttom>
	<h1><span>Name: </span> ${info.name}</h1>
	<h1><span>Id: </span> ${info.id}</h1>
	<h1><span>Order: </span> ${info.order}</h1>
	<h1><span>Abilities: </span>${info.abilities[0].ability.name}</h1>
	<h1><span>Base experience: </span>${info.base_experience}</h1>
	<h1><span>Url: </span> ${info.forms[0].url}</h1>
	<h1><span>Location: </span> ${info.location_area_encounters}</h1>
	<h1><span>Is default: </span>${info.is_default}</h1>
	<h1><span>Back female: </span>${info.sprites.back_female}</h1>
	<h1><span>Back default: </span>${info.sprites.back_default}</h1>
	<h1><span>Game index: </span>${info.game_indices[0].game_index}</h1>
	<h1><span>Height: </span>${info.height}</h1>
	<h1><span>Weight: </span>${info.weight}</h1>
	<h1><span>Stats: </span>${info.stats[0].base_stat}</h1>
	</div>`
}



function reloadWindowFunc() {
	window.location.reload()
}




















