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
        {/* Category Select */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" onChange={handleCategoryChange}>
            <option value="All">All Categories</option>
            <optgroup label="Development">
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="Django">Django</option>
              <option value="JavaScript">JavaScript</option>
              <option value="C#">C#</option>
              <option value="Java">Java</option>
            </optgroup>
            <optgroup label="Networking">
              <option value="CCNA">CCNA</option>
              <option value="Network Security">Network Security</option>
              <option value="Wireless Networking">Wireless Networking</option>
              <option value="Network Protocols">Network Protocols</option>
            </optgroup>
            <optgroup label="Cybersecurity">
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Physical Security">Physical Security</option>
              <option value="Incident Response">Incident Response</option>
              <option value="Data Integrity">Data Integrity</option>
              <option value="Authentication">Authentication</option>
            </optgroup>
            <optgroup label="Infrastructure">
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="DevOps">DevOps</option>
              <option value="Containerization">Containerization</option>
            </optgroup>
            <optgroup label="Programming Fundamentals">
              <option value="Algorithms">Algorithms</option>
              <option value="Data Structures">Data Structures</option>
              <option value="Design Patterns">Design Patterns</option>
            </optgroup>
            <optgroup label="Software Engineering">
              <option value="Software Development Life Cycle">
                Software Development Life Cycle
              </option>
              <option value="Version Control">Version Control</option>
            </optgroup>
          </select>
        </div>

        {/* Subcategory Select */}
        <div className="form-group">
          <label htmlFor="subcategory">Subcategory</label>
          <select id="subcategory" onChange={handleSubcategoryChange}>
            <option value="All">All Subcategories</option>
            <optgroup label="Cisco">
              <option value="OSPF">OSPF</option>
              <option value="Cisco Commands">Cisco Commands</option>
              <option value="Routing">Routing</option>
              <option value="Switching">Switching</option>
            </optgroup>
            <optgroup label="React">
              <option value="React Basics">React Basics</option>
              <option value="React Hooks">React Hooks</option>
              <option value="State Management">State Management</option>
              <option value="React/MobX">React/MobX</option>
            </optgroup>
            <optgroup label="Python">
              <option value="Python Basics">Python Basics</option>
              <option value="Data Analysis with Python">
                Data Analysis with Python
              </option>
              <option value="Web Development with Django">
                Web Development with Django
              </option>
            </optgroup>
            <optgroup label="Security">
              <option value="Access Control">Access Control</option>
              <option value="Security Fundamentals">
                Security Fundamentals
              </option>
              <option value="Firewall Management">Firewall Management</option>
              <option value="Encryption">Encryption</option>
              <option value="Cipher Modes">Cipher Modes</option>
              <option value="Password Security">Password Security</option>
              <option value="Key Stretching Algorithms">
                Key Stretching Algorithms
              </option>
              <option value="Asymmetric Algorithms">
                Asymmetric Algorithms
              </option>
              <option value="Symmetric Algorithms">Symmetric Algorithms</option>
              <option value="Incident Handling">Incident Handling</option>
              <option value="Network Attacks">Network Attacks</option>
              <option value="Control Categories">Control Categories</option>
              <option value="Security Controls">Security Controls</option>
              <option value="Control Types">Control Types</option>
            </optgroup>
            <optgroup label="Networking">
              <option value="IP Addressing">IP Addressing</option>
              <option value="Ethernet Categories">Ethernet Categories</option>
              <option value="Ethernet Standards">Ethernet Standards</option>
            </optgroup>
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
