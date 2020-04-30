class Animal {
	speak() {
		console.log(`${this.sound} makes a noise`);
	}
	sayName() {
		console.log(`${this.name} has a name`);
	}
}

class Dog extends Animal {
    
    constructor(sound, name) {
        super()
		this.sound = sound;
		this.name = name;
	}
}

const d = new Dog('barks', 'Megan');
d.speak()
d.sayName()