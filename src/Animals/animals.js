const data = require('./animals.json')
const animals = data.animals

function randAnimal() {
  const index = Math.floor(Math.random() * animals.length)
  return {...animals[index], index: index}
}

function animalList(length) {
  const result = []
  for (let i = 0; i < length; i++) {
    let animal = randAnimal()
    
    while (result.includes(animal)) {
      animal = randAnimal()
    }
    result.push(animal)
  }
  return result
}

export { randAnimal, animalList }