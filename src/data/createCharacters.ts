import { Counselor } from "../models/counselor.ts";
import { Fighter } from "../models/fighter.ts";
import { King } from "../models/king.ts";
import { Squire } from "../models/squire.ts";
import { AllCharacters } from "../models/character.ts";

export const createCharacters = () => {
  const charactersList: AllCharacters[] = [];

  const characterJoffrey = new King("Joffrey", "Baratheon", 20, "👑", 5);

  const characterJaime = new Fighter("Jaime", "Lannister", 30, "🗡", "sword", 7);

  const characterDaenerys = new Fighter(
    "Daenerys",
    "Targaryen",
    25,
    "🗡",
    "axe",
    5
  );

  const characterTyrion = new Counselor(
    "Tyrion",
    "Lannister",
    35,
    "🎓",
    characterDaenerys
  );

  const characterBronn = new Squire(
    "Bronn",
    "Lannister",
    40,
    "🛡",
    characterJaime,
    10
  );

  charactersList.push(
    characterJoffrey,
    characterJaime,
    characterDaenerys,
    characterTyrion,
    characterBronn
  );

  return charactersList;
};
