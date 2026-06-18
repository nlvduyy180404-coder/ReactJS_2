import React from 'react';

const ModelDisplay = ({ selectedGlass }) => {
  return (
    <div className="model-display-container">
      {/* Left Model - With Glasses */}
      <div className="model-wrapper">
        <img src="./glassesImage/model.jpg" alt="Model Left" className="model-img" />
        
        {/* Overlay Glasses */}
        {selectedGlass && (
          <div className="glass-overlay">
            <img src={selectedGlass.url} alt={selectedGlass.name} className="glass-img" />
          </div>
        )}

        {/* Info Box */}
        {selectedGlass && (
          <div className="glass-info">
            <h3 className="glass-name">{selectedGlass.name}</h3>
            <p className="glass-desc">{selectedGlass.desc}</p>
          </div>
        )}
      </div>

      {/* Right Model - Without Glasses */}
      <div className="model-wrapper">
        <img src="./glassesImage/model.jpg" alt="Model Right" className="model-img" />
      </div>
    </div>
  );
};

export default ModelDisplay;
