import React, { useState } from 'react';

function XDictionary() {
  // Initialize the dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State to handle the search term and search result
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  // Function to handle search operation
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setResult('Word not found in the dictionary.');
      return;
    }

    // Perform case-insensitive search
    const foundWord = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>Dictionary App</h1>

      {/* Input field for search term */}
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '80%' }}
      />

      {/* Search button */}
      <button onClick={handleSearch} style={{ padding: '10px', marginTop: '10px', cursor: 'pointer' }}>
        Search
      </button>

      {/* Result display */}
      <div>
        {result && <p style={{ marginTop: '20px', fontSize: '18px' }}>Definition: {result}</p>}
      </div>
    </div>
  );
}

export default XDictionary;
