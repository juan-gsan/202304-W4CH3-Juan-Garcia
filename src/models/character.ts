export abstract class Character {
  static tvShow = 'Game of Thrones';

  name;
  house;
  age;
  emoji;
  alive;
  communicate;

  constructor(name: string, house: string, age: number, emoji: string) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.emoji = emoji;
    this.alive = true;
    this.communicate = '';
  }

  endLife() {
    this.alive = false;
  }

  saySentence() {
    return this.communicate;
  }
}
