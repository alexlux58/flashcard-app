/* eslint-disable react-hooks/exhaustive-deps */
import FlashcardList from "./components/FlashcardList";
import SAMPLE_FLASHCARDS from "./constants/index";
import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [numQuestions, setNumQuestions] = useState(10);

  useEffect(() => {
    filterFlashcards();
  }, [selectedCategory, selectedSubcategory, numQuestions]);

  function filterFlashcards() {
    let filtered = SAMPLE_FLASHCARDS;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (flashcard) => flashcard.category === selectedCategory
      );
    }

    if (selectedSubcategory !== "All") {
      filtered = filtered.filter(
        (flashcard) => flashcard.subcategory === selectedSubcategory
      );
    }

    // Limit the number of questions based on user selection
    filtered = filtered.slice(0, numQuestions);

    setFlashcards(filtered);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSubcategoryChange(e) {
    setSelectedSubcategory(e.target.value);
  }

  function handleNumQuestionsChange(e) {
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
            <option value="Python">Python</option>
            <option value="Django">Django</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subcategory">Subcategory</label>
          <select id="subcategory" onChange={handleSubcategoryChange}>
            <option value="All">All</option>
            <option value="OSPF Commands">OSPF Commands</option>
            <option value="React Basics">React Basics</option>
            <option value="IP Addressing">IP Addressing</option>
            <option value="React Hooks">React Hooks</option>
            <option value="State Management">State Management</option>
            <option value="Python Basics">Python Basics</option>
            <option value="Django Basics">Django Basics</option>
            <option value="Routing">Routing</option>
            <option value="Wireless Security">Wireless Security</option>
            <option value="Switching">Switching</option>
            <option value="Wireless Networking">Wireless Networking</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numQuestions">Number of Questions</label>
          <select id="numQuestions" onChange={handleNumQuestionsChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="200">300</option>
            <option value="200">400</option>
            <option value="200">500</option>
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
