function ListEmployee({ employees }) {
  return (
    <>
      <div className="container mt-0">
      <h1>Listado de colaboradores</h1>
        {employees.map((employee) => (
          <div className="row" key={employee.id}>
            <div className="col-3">{employee.name}</div>
            <div className="col-9">{employee.email}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListEmployee;
