import { useState } from "react";
import useVocabulary from "../hooks/useVocabulary";
import "./Collection.css";

function Collection() {
  const { vocabulary } = useVocabulary();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "Daily Life",
    "Food",
    "Travel",
    "Emotions",
    "Other",
  ];

  const filteredVocabulary =
  selectedCategory === "All"
    ? vocabulary
    : vocabulary.filter(
        (word) => word.category === selectedCategory
      );

  return (
    <main className="collection-page">
      <section className="collection-heading">
        <p>YOUR LEARNING JOURNEY</p>
        <h1>My Collection</h1>
        <span>Your personal collection of Korean words.</span>
      </section>

      <section className="collection-stats">
        <div className="stat-card">
          <h2>{vocabulary.length}</h2>
          <p>Total Words</p>
        </div>
      </section>

      <section className="collection-categories">
        <h2>Words by Category</h2>

        <div className="category-grid">
          {categories.map((category) => {
            const count = vocabulary.filter(
              (word) => word.category === category
            ).length;

            return (
              <div className="category-card" key={category}>
                <h3>{category}</h3>
                <p>{count} words</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="collection-words">
  <h2>My Saved Words</h2>

  <div className="category-filters">
    <button
      className={selectedCategory === "All" ? "active" : ""}
      onClick={() => setSelectedCategory("All")}
    >
      All
    </button>

    {categories.map((category) => (
      <button
        key={category}
        className={
          selectedCategory === category ? "active" : ""
        }
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>

  <div className="collection-word-grid">
    {filteredVocabulary.length === 0 ? (
      <p>No words found in this category.</p>
    ) : (
      filteredVocabulary.map((word) => (
        <article className="collection-word-card" key={word.id}>
          <h3>{word.korean}</h3>
          <p>{word.meaning}</p>
          <span>{word.category}</span>
        </article>
      ))
    )}
  </div>
</section>
    </main>
  );
}

export default Collection;
