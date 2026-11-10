
import { useState } from "react";
import type { Vocabulary as VocabularyType } from "../interfaces/Vocabulary";
import useVocabulary from "../hooks/useVocabulary";
import WordForm from "../components/WordForm";
import "./Vocabulary.css";

function Vocabulary() {
  const {
    vocabulary,
    addVocabulary,
    updateVocabulary,
    deleteVocabulary,
  } = useVocabulary();

  const [editingWord, setEditingWord] =
    useState<VocabularyType | null>(null);

  function handleFormSubmit(
    word: Omit<VocabularyType, "id">
  ) {
    if (editingWord) {
      updateVocabulary({
        id: editingWord.id,
        ...word,
      });

      setEditingWord(null);
    } else {
      addVocabulary(word);
    }
  }

  function handleEdit(word: VocabularyType) {
    setEditingWord(word);
  }

  function handleCancel() {
    setEditingWord(null);
  }

  function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this word?"
    );

    if (confirmed) {
      deleteVocabulary(id);
    }
  }

  return (
    <main className="vocabulary-page">
      <section className="vocabulary-heading">
        <p>YOUR PERSONAL WORD COLLECTION</p>
        <h1>My Vocabulary</h1>
        <span>
          Keep your Korean words organized and growing.
        </span>
      </section>

      <section className="vocabulary-content">
        <WordForm
          onSubmit={handleFormSubmit}
          editingWord={editingWord}
          onCancel={handleCancel}
        />

        <div className="word-list">
          <h2>Saved Words ({vocabulary.length})</h2>

          {vocabulary.length === 0 ? (
            <p className="empty-message">
              You haven't saved any words yet. Start building
              your collection!
            </p>
          ) : (
            vocabulary.map((word) => (
              <article className="word-card" key={word.id}>
                <div className="word-card-header">
                  <div>
                    <h3>{word.korean}</h3>
                    <p>{word.meaning}</p>
                  </div>

                  <span className="word-category">
                    {word.category}
                  </span>
                </div>

                <p className="word-example">
                  {word.example}
                </p>

                <div className="word-actions">
                  <button
                    onClick={() => handleEdit(word)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(word.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Vocabulary;