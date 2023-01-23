function SearchEmployee({ searchEmployee }) {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-7">
          <input
            className="form-control"
            type="text"
            id="searchEmployee"
            placeholder="🔍 Buscar..."
            onChange={searchEmployee}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchEmployee;
