import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiRepository } from "../services/api.repository";
import { AllCharacters } from "../types/allCharacters";
import { consoleError } from "../services/errors";
import { Card } from "./Card";

export function List() {
  const [characters, setCharacters] = useState<AllCharacters[]>([]);
  const characterUrl = "http://localhost:3000/characters/";

  const repo: ApiRepository<AllCharacters> = useMemo(
    () => new ApiRepository<AllCharacters>(characterUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacters = await repo.getAll();
    setCharacters(loadedCharacters);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleUpdate = async (character: AllCharacters) => {
    try {
      const updateCharacter = await repo.update(character.id, character);
      setCharacters(
        characters.map((item) =>
          item.id === character.id ? updateCharacter : item
        )
      );
    } catch (error) {
      consoleError(error);
    }
  };

  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((item) => (
        <Card item={item} key={item.id} handleUpdate={handleUpdate}></Card>
      ))}
    </ul>
  );
}
