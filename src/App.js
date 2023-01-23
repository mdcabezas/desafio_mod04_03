import { useState } from "react";
import dbEmployee from "./utils/dbemployee";
import generateUuid from "./utils/generateuuid";
import ListEmployee from "./components/ListEmployee";
import AddEmployee from "./components/AddEmployee";
import SearchEmployee from "./components/SearchEmployee";

function App() {
  const [employees, setEmployees] = useState(dbEmployee);
  const [filteredEmployees, setFilteredEmployees] = useState(dbEmployee);

  const searchEmployee = (e) => {
    setFilteredEmployees(employees.filter((employee) => employee.name.toLowerCase().includes((e.target.value).toLowerCase())))
  }

  const addEmployee = (e) => {
    e.preventDefault()
    const newEmployee = { id: generateUuid(), name: e.target.nameEmployee.value, email: e.target.emailEmployee.value }
    setEmployees([...employees, newEmployee])
    setFilteredEmployees([...employees, newEmployee])
    e.target.nameEmployee.value = "";
    e.target.emailEmployee.value = "";
  }

  return (
    <>
      <AddEmployee addEmployee={addEmployee} />
      <SearchEmployee searchEmployee={searchEmployee} />
      <ListEmployee employees={filteredEmployees} />
    </>
  );
}

export default App;
