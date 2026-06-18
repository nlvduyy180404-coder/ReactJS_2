import React, { useState } from 'react';
import Header from './components/Header';
import ModelDisplay from './components/ModelDisplay';
import GlassesList from './components/GlassesList';
import glassesData from './data/dataGlasses.json';
import './index.css';

function App() {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const handleSelectGlass = (glass) => {
    setSelectedGlass(glass);
  };

  return (
    <div className="app-container">
      <div className="bg-overlay"></div>
      <div className="content-container">
        <Header />
        
        <main className="main-content">
          <ModelDisplay selectedGlass={selectedGlass} />
          <GlassesList 
            glasses={glassesData} 
            selectedGlass={selectedGlass}
            onSelectGlass={handleSelectGlass} 
          />
        </main>
      </div>
    </div>
  );
}

export default App;
