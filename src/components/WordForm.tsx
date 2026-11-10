import "./WordForm.css";
import { useEffect, useState } from "react";
import type React from "react";
import type {Vocabulary} from "../interfaces/Vocabulary";

interface WordFormProps {
  onSubmit: (word: Omit<Vocabulary, "id">) => void;
  editingWord: Vocabulary | null;
  onCancel: () => void;
}

function WordForm({
  onSubmit,
  editingWord,
  onCancel,
}: WordFormProps) {
  const [korean, setKorean] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [category, setCategory] = useState("Daily Life");

  useEffect(() => {
    if (editingWord) {
      setKorean(editingWord.korean);
      setMeaning(editingWord.meaning);
      setExample(editingWord.example);
      setCategory(editingWord.category);
    } else {
      setKorean("");
      setMeaning("");
      setExample("");
      setCategory("Daily Life");
    }
  }, [editingWord]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      korean,
      meaning,
      example,
      category,
    });

    if (!editingWord) {
      setKorean("");
      setMeaning("");
      setExample("");
      setCategory("Daily Life");
    }
  }

  return (
    <form className="word-form" onSubmit={handleSubmit}>
      <h2>{editingWord ? "Edit Word" : "Add New Word"}</h2>

      <label htmlFor="korean">Korean Word</label>
      <input
        id="korean"
        type="text"
        value={korean}
        onChange={(event) => setKorean(event.target.value)}
        placeholder="예: 사랑"
        required
      />

      <label htmlFor="meaning">Meaning</label>
      <input
        id="meaning"
        type="text"
        value={meaning}
        onChange={(event) => setMeaning(event.target.value)}
        placeholder="Example: Love"
        required
      />

      <label htmlFor="example">Example Sentence</label>
      <textarea
        id="example"
        value={example}
        onChange={(event) => setExample(event.target.value)}
        placeholder="Write a Korean example sentence..."
        required
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Daily Life</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Emotions</option>
        <option>Other</option>
      </select>

      <div className="form-actions">
        <button type="submit">
          {editingWord ? "Update Word" : "Save Word"}
        </button>

        {editingWord && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default WordForm;