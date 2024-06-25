import React from 'react';
import PropTypes from 'prop-types';

const QuoteBox = ({ quote, author, onNewQuote, color }) => {
  return (
    <div id='quote-box'>
      <p id='text' style={{ color: color }}>
        {quote}
      </p>
      <p id='author' style={{ color: color }}>
        - {author}
      </p>
      <button
        id='new-quote'
        onClick={onNewQuote}
        style={{ backgroundColor: color, color: 'white' }}
      >
        New Quote
      </button>
    </div>
  );
};

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onNewQuote: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default QuoteBox;
