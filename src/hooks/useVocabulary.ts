
import { useEffect, useState } from "react";
import type { Vocabulary } from "../interfaces/Vocabulary";
import { getVocabulary, saveVocabulary } from "../utils/storage";

function useVocabulary() {
  const [vocabulary, setVocabulary] = useState<Vocabulary[]>(
    () => getVocabulary()
  );

  useEffect(() => {
    saveVocabulary(vocabulary);
  }, [vocabulary]);

  function addVocabulary(item: Omit<Vocabulary, "id">) {
    const newItem: Vocabulary = {
      id: Date.now(),
      ...item,
    };

    setVocabulary((previous) => [...previous, newItem]);
  }

  function updateVocabulary(updatedItem: Vocabulary) {
    setVocabulary((previous) =>
      previous.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  }

  function deleteVocabulary(id: number) {
    setVocabulary((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  return {
    vocabulary,
    addVocabulary,
    updateVocabulary,
    deleteVocabulary,
  };
}

export default useVocabulary;
