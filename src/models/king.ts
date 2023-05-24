import { Character } from './character.ts';

export class King extends Character {
  rulingYears;

  constructor(
    name: string,
    house: string,
    age: number,
    emoji: string,
    rulingYears: number
  ) {
    super(name, house, age, emoji);
    this.rulingYears = rulingYears;
    this.communicate = "You're all gonna die";
  }
}
