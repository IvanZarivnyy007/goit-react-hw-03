const SearchBox = ({ handleChange, imputValue }) => {
  return (
    <div className="searchbox-container">
      <p className="searchbox-title">Find contacts by name</p>
      <input
        className="searchbox-input"
        type="text"
        value={imputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
