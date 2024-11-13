//class with one key

class Car {
  constructor(model) {
    this.model = model;
  }
  displayModel() {
    console.log("this is model:", this.model);
  }
}
const benz = new Car("2024");
//console.log(benz);
//console.log(benz.displayModel());

//class with two keys
class friends {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  introduce() {
    console.log(`this is  ${this.name} and I am a ${this.gender}`);
  }
}
const friendOne = new friends("Tumi", "female");
console.log(friendOne);
console.log(friendOne.name);
console.log(friendOne.gender);
friendOne.introduce();

class myFriends extends friends {
  constructor(name, gender, age) {
    super(name, gender);
    this.age = age;
  }
  onlyAge() {
    console.log(`you are ${age} years old`);
  }
}

const tumiFriend = new myFriends("esther", "female", 25);
console.log(tumiFriend);
tumiFriend.introduce();
tumiFriend.onlyGender();
tumiFriend.onlyName();
tumiFriend.onlyAge();
