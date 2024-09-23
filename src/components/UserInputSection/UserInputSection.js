function UserInputSection({
  dateStart,
  setDateStart,
  dateEnd,
  setDateEnd,
  selectedOptions,
  setSelectedOptions,
  ownerName,
  setOwnerName,
  onCalculateClick,
}) {
  const handleCheckboxChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="input-section user-input">
      <label>Nom :</label>
      <input
        type="text"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
      />
      <label>De :</label>
      <input
        type="date"
        value={dateStart}
        onChange={(e) => setDateStart(e.target.value)}
      />
      <label>A :</label>
      <input
        type="date"
        value={dateEnd}
        onChange={(e) => setDateEnd(e.target.value)}
      />

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="aggregate"
            checked={selectedOptions.aggregate}
            onChange={handleCheckboxChange}
          />
          Agrégat
        </label>
        <label>
          <input
            type="checkbox"
            name="tresorerie"
            checked={selectedOptions.tresorerie}
            onChange={handleCheckboxChange}
          />
          Trésorerie
        </label>
        <label>
          <input
            type="checkbox"
            name="immobilisations"
            checked={selectedOptions.immobilisations}
            onChange={handleCheckboxChange}
          />
          Immobilisations
        </label>
        <label>
          <input
            type="checkbox"
            name="obligations"
            checked={selectedOptions.obligations}
            onChange={handleCheckboxChange}
          />
          Obligations
        </label>
      </div>
      <button onClick={onCalculateClick}>Calculer</button> {/* Bouton ajouté ici */}
    </div>
  );
}

export default UserInputSection;
