function AddEmployee({addEmployee}) {
  return (
    <div className="container mt-4">
      <h1>Agregar colaborador</h1>
    <form className="row g-3" onSubmit={addEmployee}>
    <div className="row mb-5 mt-3">
      <div className="col-3 form-floating">
        <input type="text" className="form-control" id="nameEmployee" placeholder="Juan Perez" required/>
        <label htmlFor="nameEmployee" className="form-label">Nombre</label>
      </div>
      <div className="col-3 form-floating">
        <input type="email" className="form-control" id="emailEmployee" placeholder="juan.perez@correo.com" required/>
        <label htmlFor="emailEmployee" className="form-label">Email</label>
      </div>
      <div className="col-2 d-flex align-items-end">
        <button type="submit" className="btn btn-outline-primary">Agregar</button>
      </div>
    </div>
    </form>
    </div>
  );
}

export default AddEmployee;