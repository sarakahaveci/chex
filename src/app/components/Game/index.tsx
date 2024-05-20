// src/app/components/Game/index.tsx

import React, { useState, useEffect } from 'react';

interface Dictionary {
  words: string[];
}

interface GameProps {
  dictionary: Dictionary | null; // Update type to allow null
}

const Game: React.FC<GameProps> = ({ dictionary }) => {
  const [letters, setLetters] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const randomLetters = () => {
      if (dictionary && dictionary.words) { // Check if dictionary and words exist
        let allLetters = dictionary.words.join('');
        let lettersArray: string[] = [];
        for (let i = 0; i < 7; i++) {
          lettersArray.push(allLetters[Math.floor(Math.random() * allLetters.length)]);
        }
        setLetters(lettersArray);
      }
    };
    randomLetters();
  }, [dictionary]);

  const validateWord = (word: string) => {
    return dictionary?.words.includes(word) ?? false; // Check if dictionary and words exist
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateWord(input)) {
      setScore(score + input.length);
      setTimeLeft(timeLeft + 15);
      setWords([...words, input]);
    }
    setInput('');
  };

  return (
    <div>
      <div>
        {letters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* Render Timer and Scoreboard components here */}
    </div>
  );
};

export default Game;
