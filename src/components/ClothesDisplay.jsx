import React from 'react';

const ClothesDisplay = ({ selectedState }) => {
  if (!selectedState) {
    return (
      <div className="clothes-display">
        <h2>Select a state to view traditional clothes</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid">
        {selectedState.clothes.map((cloth, index) => (
          <div className="card" key={index}>
            <img src={cloth.image} alt={cloth.name} />
            <div className="card-body">
              <h3>{cloth.name}</h3>
              <p className="desc">{cloth.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothesDisplay;

