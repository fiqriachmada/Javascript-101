var name = 'Kiki'

var name = 'Griko'

console.log(name)

var boolean = true

console.log(typeof Boolean(boolean))

// var tes = true

console.log('Kiki' + ' Griko ' + 5)

console.log(5 + '6')

console.log('6' + 5)

console.log('6' - 5)

console.log(Number(true))

console.log(Number(false))

const a = 10

if (a >= 10) {
  console.log('more than 10')
} else {
  console.log('less than 10')
}

a >= 10 ? console.log('more than 10') : console.log('less than 10')

console.log(a ?? 20)

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const data = arr.concat(['i', 'j', 'k', 'l', 'm'])

console.log(data)

let users = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Doe'
  },
  {
    id: 3,
    name: 'Jane'
  }
]

let someUsers = users.filter(user => user.id > 2)

console.log(someUsers)

let userId = users.map(user => user.id)
let userName = users.map(user => user.name)

console.log(userId)

console.log(userName)

const someoneName = 'Sammy'
const map = Array.prototype.map

const newName = map.call(someoneName, eachLetter => {
  return `${eachLetter}a`
})

console.log(newName)

function showGreeting () {
  console.log('Greetings')
}

showGreeting()

function showGreetingName (peopleName) {
  console.log(`Greetings from ${peopleName}`)
}

showGreetingName('Mada')

function sum (c, d) {
  return c + d
}

const sum1 = function (c, d) {
  return c + d
}

const sum2 = (c, d) => c + d

const [firstName, ...another] = ['Josh', 'Doe', 20, 'Surabaya', 'Web Developer']

console.log(another)

console.log(sum(1, 2))
console.log(sum1(1, 2))
console.log(sum2(1, 2))

let dataset1 = [
  { name: 'John', age: 21 },
  { name: 'Doe', age: 22 },
  { name: 'Surabaya', age: 23 },
  { name: 'Web Developer', age: 24 }
]

console.log(dataset1.map(dataset => dataset.name))
console.log(dataset1.map(dataset => dataset.age))
console.log(dataset1.map(dataset => dataset))

// javascript.info
