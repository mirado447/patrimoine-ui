import './App.css';
import React, { useState } from 'react';
import UserInputSection from './components/UserInputSection/UserInputSection';
import OutputSection from './components/outputSection/OutputSection';
import graphique from './images/statistic bord.jpg';

function App() {
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    aggregate: false,
    tresorerie: false,
    immobilisations: false,
    obligations: false,
  });
  const [ownerName, setOwnerName] = useState('');

  return (
    <div className="App">
      <div className="container">
        <div className="left-column">
          <UserInputSection
            dateStart={dateStart}
            setDateStart={setDateStart}
            dateEnd={dateEnd}
            setDateEnd={setDateEnd}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            ownerName={ownerName}
            setOwnerName={setOwnerName}
          />
          <OutputSection
            selectedOptions={selectedOptions}
            ownerName={ownerName}
          />
        </div>
        <div className="right-column">
          <img src={graphique} alt="Graphique statique" />
        </div>
      </div>
    </div>
  );
}

export default App;
