import React, { useState, useEffect } from 'react';
import QuoteBox from './components/QuoteBox';
import './styles/App.css';

const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8633'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});
  const [color, setColor] = useState(getRandomColor());

  const fetchQuotes = async () => {
    const response = await fetch('/quotes.json');
    const data = await response.json();
    setQuotes(data);
    const initialQuote = data[Math.floor(Math.random() * data.length)];
    setCurrentQuote(initialQuote);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
    setColor(getRandomColor());
  };

  return (
    <div className='App' style={{ backgroundColor: color, color: color }}>
      <header className='App-header'>
        {quotes.length ? (
          <QuoteBox
            quote={currentQuote.quote}
            author={currentQuote.author}
            onNewQuote={handleNewQuote}
            color={color}
          />
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
};

export default App;
