
const container = document.querySelector('.container')
const btnPrev = document.querySelector('.btn_prev')
const btnNext = document.querySelector('.btn_next')
const page = document.querySelector('.conter')

console.dir(page);

const LIMIT = 20
const TOTAL_POKEMONS = 1118
const TOTAL_PAGES = Math.floor(TOTAL_POKEMONS / LIMIT)


let pageCounter = 1

let offsetCounter = 0

let api = {
	main: 'https://pokeapi.co/api/v2/pokemon'
}


window.addEventListener('load', () => {
	setDate(`${api.main}?offset=${``}&limits=${``}`).then((data) => {
		console.log(data);
		const temp = data.results.map((pokemon) => CardTitle(pokemon)).join(' ');
		container.innerHTML = temp;
		
	
	})
}) 


const setDate = (url) => 
		fetch(url) 
	  .then((res) => res.json())
	
	

   


function CardTitle(pokemon) {
	console.log(pokemon)
	return `
	<div class="title_card" onClick="setInfoPokemon('${pokemon.url}')">
	  <div class="title_text">
		  <h1 class="title_h1" >${pokemon.name}</h1>
		</div>
	</div>`
}





const setInfoPokemon = (url) => {
	setDate(url).then(data => container.innerHTML = CardPokemon(data))
	btnNext.style.display = 'none'
	btnPrev.style.display = 'none'
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

// ?Pagination

window.addEventListener('load', () => {
	page.innerHTML = pageCounter
	btnPrev.setAttribute('disabled', true)
})

btnNext.addEventListener('click', e => {
	e.preventDefault()
	btnPrev.removeAttribute('disabled')
	if(pageCounter >= 1 && pageCounter <= TOTAL_PAGES) {
		if (pageCounter === TOTAL_PAGES) {
			btnNext.setAttribute('disabled', true)
			setDate(
				`$api.main{?offset=${offsetCounter += LIMIT}&limit=${LIMIT}}`
			).then((data) => {
				pageCounter++
				page.innerHTML = pageCounter
				let temp = data.results.map((pokemon) => CardTitle(pokemon)).join(' ')
				container.innerHTML = temp
			})
		}else {
			setDate(
				`${api.main}?offset=${offsetCounter += LIMIT}&limit=${LIMIT}`
			).then((data) => {
				pageCounter++
				page.innerHTML = pageCounter
				let temp = data.results.map((pokemon) => CardTitle(pokemon)).join(' ')
				container.innerHTML = temp
			})
		}
	}
})

// prev

btnPrev.addEventListener("click", (e) => { 
  e.preventDefault(); 
	
  if (pageCounter >= 1) { 
    pageCounter --
 
    if (pageCounter === 1) { 
      btnPrev.setAttribute("disabled", true); 
      offsetCounter = 0; 
      setDate(`${api.main}?offset=${offsetCounter}&limit=${LIMIT}`).then( 
        (data) => { 
          page.innerHTML = pageCounter; 
          let temp = data.results 
            .map((pokemon) => CardTitle(pokemon)) 
            .join(""); 
          container.innerHTML = temp; 
        } 
      ); 
    } else { 
      setDate(`${api.main}?offset=${offsetCounter -= LIMIT}&limit=${LIMIT}`).then( 
        (data) => { 
          btnNext.removeAttribute('disabled') 
          page.innerHTML = pageCounter; 
          let temp = data.results 
            .map((pokemon) => CardTitle(pokemon)) 
            .join(""); 
          container.innerHTML = temp; 
        } 
      ); 
    } 
  } 
})




