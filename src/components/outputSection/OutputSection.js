import React from 'react';

function OutputSection({ selectedOptions, ownerName }) {
  return (
    <div className="output-section">
      <h2>Sorties</h2>
      <div className="text-output">
        <p>Patrimoine de {ownerName}</p>
        {selectedOptions.aggregate && <p>Données Agrégées...</p>}
        {selectedOptions.tresorerie && <p>Données de Trésorerie...</p>}
        {selectedOptions.immobilisations && (
          <p>Données sur Immobilisations...</p>
        )}
        {selectedOptions.obligations && <p>Données sur Obligations...</p>}
        {!Object.values(selectedOptions).some(Boolean) && (
          <p>Aucune option sélectionnée.</p>
        )}
      </div>
    </div>
  );
}

export default OutputSection;
