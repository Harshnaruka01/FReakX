import React from 'react';

const StateList = ({ states, onStateClick }) => {
  return (
    <div className="state-list">
      <h2>States of India</h2>
      <ul>
        {states.map((state) => (
          <li key={state.name} onClick={() => onStateClick(state)}>
            {state.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;

