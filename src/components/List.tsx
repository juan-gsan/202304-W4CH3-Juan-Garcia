import { Character } from "../models/character";

export function List() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const taskUrl = "http://localhost:3000/characters/";
  return <></>;
}
