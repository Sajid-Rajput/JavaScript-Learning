console.log("Static properties and methods in JavaScript");

// Example 1
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0]);

// Example 2
class Article1 {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    return new this("Rich Dad Poor Dad", 2003);
  }
}

let todayArticle = Article1.createTodays();

console.log(todayArticle.title, todayArticle.date);

// Example

class Animal {
  static planet = "Earth";
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  run() {
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run();

console.log(Rabbit.planet);

console.log(Rabbit.__proto__ === Animal);
console.log(Rabbit.prototype.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Rabbit.prototype.__proto__);
console.log(Rabbit.prototype);
