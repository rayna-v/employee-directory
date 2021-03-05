import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import API from "../src/utils/API";
import Search from "./components/Search";
import Row from "./components/Row";
import TableHead from "./components/TableHead";

function App() {
  // defining state and methods to update state
  const [employees, setEmployees] = useState([]);
  const [searched, setSearched] = useState({
    search: "",
    filteredEmps: []
  })
  const [sort, setSort] = useState({
    current: "",
    display: "default",
    sortEmps: []
  })

  // hook to make initial API call on page load
  useEffect(() => {
    API.search().then(res => {
      setEmployees(res.data.results);
    });
    // 
  }, []);
  // console.log(employees)
  function handleInputChange(event) {

    const { value } = event.target;
    setSearched({
      search: value
    });
    // const sorting = employees.filter(employee => employee.name.trim().toLowerCase().includes(value.trim().toLowerCase()));
    // setSort({ sortEmps: sorting });
    // console.log(sort.sortEmps)
    searching(value)
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("submitted")
  }
  function searching(value) {
    console.log("searching")
    const criteria = {
      name: employees.name.first.includes(value)

    }
    // const filterEmps = employees.
  }

  return (
    <Router>
      <main className="wrapper">
        <h1>Employee Directory!</h1>
        <Search
          handleFormSubmit={(event) => handleFormSubmit(event)}
          handleInputChange={(event) => handleInputChange(event)}
        />
        <div className="d-flex justify-content-center">
          <table className="table table-dark ">
            <TableHead />
            {employees.map(emp => {
              return (
                <Row
                  id={employees.indexOf(emp)}
                  key={employees.indexOf(emp)}
                  photo={emp.picture.thumbnail}
                  first={emp.name.first}
                  last={emp.name.last}
                  age={emp.dob.age}
                  phone={emp.phone}
                  email={emp.email}
                />
              )
            })
            }
          </table>
        </div>
      </main>
    </Router>
  );
}

export default App;



{/* {employees.map(emp => {
          return (
            <Row
              photo={emp.picture.thumbnail}
              first={emp.name.first}
              last={emp.name.last}
              age={emp.dob.age}
              phone={emp.phone}
              email={emp.email}
            />
          )
        })
        } */}