

// console.log('Привет 1')

// setTimeout(() => console.log('Привет 2'), 2000)

// setTimeout(() => console.log('Привет 3'), 1000)

// console.log('Привет 4')

// setTimeout(() => console.log('Привет 5'), 0)

// console.log('get Data...')

// setTimeout(() => {
// 	console.log('Preparing date...')
// 	let data = {
// 		body: [],
// 		status: 'working',
// 		port: 2000, 
// 	}

// }, 2000)


// let prms = new Promise((resolve) => {
// 	setTimeout(() => {
// 		let data = {
// 		body: [],
// 		status: 'working',
// 		port: 2000, 
// 	}
// 		console.log('Preparing date...')
// 		resolve(data)
// 	}, 2000)

// 	prms.them(data  => {
// 	  return new Promise(resolve => {
// 			setTimeout(() => {
// 				data.location = 'Ukraina'
// 				resolve(data)
// 			}, 3000)
// 		})
// 	}).them(data => {
// 		console.log(data)
// 	})
// })


// Promise.all([aleep(4000), sleep(2000)]).then(() => {
// 	console.log('Метод all')
// })

// Promise.race([sleep(4000), sleep(2000)]).then(() => {
// 	console.log('Метод race')
// })




// window.addEventListener('load', () => {
// 	setDate('users').then((date) => {
// 		const template =data.map((item) => CardTemplate(item)).join(' ');
// 		container.innerHTML = template;
// 	})
// })

// function setDate(resources) {
// 	return 	fetch(`https://jsonplaceholder.typicode.com/${resources}`)
// 	.then((response) => response.json());
// 	}

////////////////////////////////////////////////////////////////////////////////////*


const container = document.querySelector('.container')


let api = {
	main: 'https://pokeapi.co/api/v2/pokemon'
}




window.addEventListener('load', () => {
	setDate(api.main).then((data) => {
		console.log(data);
	
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
	<div>
	<h1>name: ${info.name}</h1>
	<h1>id: ${info.id}</h1>

	<h1>order: ${info.order}</h1>
	<h1>url: ${info.forms[0].url}</h1>
	<h1>location: ${info.location_area_encounters}</h1>

	<h1>${info.moves[0].move.name}</h1>
	</div>`
}




// const click_one = document.querySelector('.click1')

// let api1 = {
// 	main: 'https://pokeapi.co/api/v2/pokemon/1/'
// }



// const set_date = (url). => 
//   fetch(url)
// 	  .then((res) => res.json())





















