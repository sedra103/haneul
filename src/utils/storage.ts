
import type { Vocabulary } from "../interfaces/Vocabulary";

const STORAGE_KEY = "haneul-vocabulary";

export function getVocabulary(): Vocabulary[] {
  const storedVocabulary = localStorage.getItem(STORAGE_KEY);

  if (!storedVocabulary) {
    return [];
  }

  return JSON.parse(storedVocabulary) as Vocabulary[];
}

export function saveVocabulary(vocabulary: Vocabulary[]): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(vocabulary)
  );
}
