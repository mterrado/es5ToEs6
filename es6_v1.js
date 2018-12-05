
const animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
];

animalListing(animals, true);

function animalListing( animalArray, listFoods){
	if(listFoods===undefined){
		listFoods = true;
	}
	for(let animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
		let thisAnimal = animalArray[animalIndex];

        let {name, height, weight, type, top3Foods: foods} = thisAnimal;
        let [food1, food2, food3] = foods;
        let sentence = `Animal: ${name} is a ${type} and is ${height} meters at ${weight*2.2} lbs`;

		console.log('sentence:', sentence);

		if(listFoods){
            let foodSentence = `it likes to eat ${food1}, ${food2}, and ${food3}`;
            console.log(foodSentence)
		}
	}
};