import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="home">
      <section className="hero">
        <p className="hero-subtitle">한국어를 이야기로 배우다</p>

        <h1>
          Learn Korean
          <br />
          Through Stories
        </h1>

        <p className="hero-description">
          Discover the beauty of Korean language through
          short stories, useful vocabulary, and everyday expressions.
        </p>

        <button className="hero-button" onClick={() => navigate("/vocabulary")}>
          Start Building Your Vocabulary
        </button>
      </section>
    </main>
  );
}

export default Home;
