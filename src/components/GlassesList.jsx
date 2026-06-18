import React from 'react';

const GlassesList = ({ glasses, onSelectGlass, selectedGlass }) => {
  return (
    <div className="glasses-list-container">
      <div className="glasses-grid">
        {glasses.map((glass) => (
          <button 
            key={glass.id} 
            className={`glass-item ${selectedGlass?.id === glass.id ? 'active' : ''}`}
            onClick={() => onSelectGlass(glass)}
          >
            <img src={glass.url} alt={glass.name} className="glass-item-img" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlassesList;
