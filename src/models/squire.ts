import { Character } from './character.ts';
import { Fighter } from './fighter.ts';

export class Squire extends Character {
  knight;
  pelotismo;

  constructor(
    name: string,
    house: string,
    age: number,
    emoji: string,
    knight: Fighter,
    pelotismo: number
  ) {
    super(name, house, age, emoji);
    this.knight = knight;
    this.pelotismo = pelotismo;
    this.communicate = "I'm a loser";
  }
}
