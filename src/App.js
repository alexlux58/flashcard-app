import FlashcardList from "./components/FlashcardList";
import SAMPLE_FLASHCARDS from "./constants/index";
import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [numQuestions, setNumQuestions] = useState(10); // New state for number of questions

  useEffect(() => {
    filterFlashcards();
  }, [selectedCategory, numQuestions]); // Added numQuestions dependency

  function filterFlashcards() {
    let filtered = SAMPLE_FLASHCARDS;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (flashcard) => flashcard.category === selectedCategory
      );
    }

    // Limit the number of questions based on user selection
    filtered = filtered.slice(0, numQuestions);

    setFlashcards(filtered);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleNumQuestionsChange(e) {
    // New handler for number of questions
    setNumQuestions(parseInt(e.target.value, 10));
  }

  return (
    <>
      <form className="header">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="React">React</option>
            <option value="CCNA">CCNA</option>
          </select>
        </div>
        <div className="form-group">
          {" "}
          {/* New dropdown for number of questions */}
          <label htmlFor="numQuestions">Number of Questions</label>
          <select id="numQuestions" onChange={handleNumQuestionsChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
