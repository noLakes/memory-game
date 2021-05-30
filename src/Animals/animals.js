const data = require('./animals.json')
const animals = data.animals

function randAnimal() {
  const index = Math.floor(Math.random() * animals.length)
  return {...animals[index], index: index}
}

const isUnique = (animal, array) => {
  return array.every(a => a.name !== animal.name)
}

function animalList(length) {
  const result = []

  for (let i = 0; i < length; i++) {
    let animal = randAnimal()
    let unique = isUnique(animal, result)
    
    while (!unique) {
      animal = randAnimal()
      unique = isUnique(animal, result)
    }
    result.push(animal)
  }

  return result
}

export { randAnimal, animalList }