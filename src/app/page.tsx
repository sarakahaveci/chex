// src/app/page.tsx

"use client";
import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Game from "./components/Game/index";

interface Dictionary {
  words: string[];
}

const Home: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const response = await fetch(`/${language}-dictionary.json`);
      const data = await response.json();
      setDictionary(data);
    };
    fetchDictionary();
  }, [language]);

  return (
    <Layout>
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Game dictionary={dictionary} />
      <div className="mt-8 flex justify-center">
        <button className="mr-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={() => setLanguage('en')}>English</button>
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={() => setLanguage('tr')}>Turkish</button>
      </div>
      <div className="mt-8">
        {dictionary ? <Game dictionary={dictionary} /> : <p className="text-center">Loading...</p>}
      </div>
    </main>
    </Layout>
  );
};

export default Home;
