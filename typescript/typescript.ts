const sum = (a: number, b: number) => {
	return a + b
}

const answer = sum(4, 5)
console.log(answer)

let isCool: boolean = true
let age: number = 56
let eyeColor: string = 'brown'
let favQuote: string = `I'm not old, I'm only ${age}`
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['cat', 'dog', 'pig']
let wizard: object = {
	a: 'John',
}
let meh: undefined = undefined
let noo: null = null

// tuple: can store different types
let basket: [string, number]
basket = ['basketball', 5]

// enum
enum Size {
	Small = 1,
	Medium = 2,
	Large = 3,
}
let sizeName: string = Size[2]
// let sizeSmall: number = Size.Small
let sizeSmall: number = Size['Small']

console.log(sizeName)
console.log(sizeSmall)

// any type - convert javascript code to typescript
// temp placeholder
let whatever: any = 'aghhhhhhhhh'
whatever = basket

// void use by function don't return anything
let sing = (): void => {
	console.log('hello')
}  

// never: for function never return
// never: for function with no end point and throw error
let error = (): never => {
	throw Error('ooops')
}

// interface
interface RobotArmy {
	count: number,
	type: string,
	magic?: string // ? optional
}

// type - to check
// type RobotArmy {
// 	count: number,
// 	type: string,
// 	magic: string
// }

let fightRobotArmy1 = (robots: RobotArmy) => {
	console.log('FIGHT')
}

// magic property is optional
fightRobotArmy1({ count: 1, type: 'dragon' })

let fightRobotArmy2 = (robots: { 
	count: number,
	type: string,
	magic: string
}) => {
	console.log('FIGHT')
}

// type assertion - overwrite type
interface CatArmy {
	count: number,
	type: string,
	magic: string
}

let dog = {} as CatArmy
dog.count

// function 
let fightRobotArmy3 = (robots: RobotArmy): void => {
	console.log('FIGHT')
}

let fightRobotArmy4 = (robots: { 
	count: number,
	type: string,
	magic: string
}): number => {
	console.log('FIGHT')
	return 5
}

// Class
class Animal {
	private sing: string = 'laaaaaa'
	constructor(sound: string) {
		this.sing = sound
	}

	greet(): string {
		return `Hello ${this.sing}`
	}
}

let lion = new Animal('RAWWWWW')
lion.greet()

// union type - can be string or number
let confused: string | number = 5

// infer type
let x = 4 // x is inferred as number
// x = 'hello' 