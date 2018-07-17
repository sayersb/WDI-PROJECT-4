import React from 'react';

const Suggestions = ({ results, eventPicked }) => {
  console.log(results);
  return (
    <select onChange={eventPicked}>
      {results.map(result =>
        <option key={result._id} value={result.id}>{result.name}</option>
      )}
    </select>
  );
};

export default Suggestions;
