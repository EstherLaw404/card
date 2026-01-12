import React, { useState } from "react";

function App() {
  const [numPeople, setNumPeople] = useState(1);
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const response = await fetch(`http://localhost:5000/index.php?people=${numPeople}`);
    const data = await response.json();
    setCards(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Card Distribution</h2>
      <input
        type="number"
        value={numPeople}
        min="1"
        onChange={(e) => setNumPeople(e.target.value)}
      />
      <button onClick={fetchCards} style={{ marginLeft: "10px" }}>
        Distribute Cards
      </button>

      <div style={{ marginTop: "20px" }}>
        {cards.map((personCards, idx) => (
          <div key={idx}>
            <strong>Person {idx + 1}:</strong> {personCards.join(", ")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
