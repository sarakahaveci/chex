"use client";
import React from 'react';

interface ScoreboardProps {
  score: number;
  words: string[];
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score, words }) => (
  <div>
    <h2>Score: {score}</h2>
    <ul>
      {words.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  </div>
);

export default Scoreboard;
