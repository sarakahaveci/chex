
import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Game from '../../Game';
const EnglishGame: React.FC = () => {
  const [dictionary, setDictionary] = useState({ words: [] });

  useEffect(() => {
    fetch('/en-dictionary.json')
      .then((response) => response.json())
      .then((data) => setDictionary(data));
  }, []);

  return (
    <Layout>
      <Game dictionary={dictionary} />
    </Layout>
  );
};

export default EnglishGame;
