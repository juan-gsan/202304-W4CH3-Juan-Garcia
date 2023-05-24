import { AllCharacters } from '../types/allCharacters.ts';
import { Character } from './character.ts';

export class Counselor extends Character {
  characterAdvised;

  constructor(
    name: string,
    house: string,
    age: number,
    emoji: string,
    characterAdvised: AllCharacters
  ) {
    super(name, house, age, emoji);
    this.characterAdvised = characterAdvised;
    this.communicate = "I think I'll be dying soon";
  }
}
