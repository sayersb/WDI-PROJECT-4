import React from 'react';

const Suggestions = ({ results }) => {
  console.log(results);
  return (
    <ul>
      {results.map(result =>
        <li key={result.id}>
          {result.name}
        </li>
      )}
    </ul>
  );
};

export default Suggestions;
