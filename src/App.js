import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import API from "../src/utils/API";
import Search from "./components/Search";
import Row from "./components/Row";
import TableHead from "./components/TableHead";

function App() {
  // defining state and methods to update state
  const [employees, setEmployees] = useState([]);
  const [initialEmployeeList, setInitialEmployeeList] = useState([])
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
      const results = res.data.results
      const cleanedResults = results.map((result) => {
        return {
          ...result,
          name: {
            ...result.name,
            first: result.name.first.trim().toLowerCase(),
            last: result.name.last.trim().toLowerCase(),
          }
        }
      })
      setEmployees(cleanedResults);
      setInitialEmployeeList(cleanedResults)
    });
    // 
  }, []);
  // console.log(employees)
  function handleInputChange(event) {

    const { value } = event.target;
    setSearched({
      search: value
    });
    const cleanedInput = value.trim().toLowerCase();
    console.log(cleanedInput)
    const foundEmployees = initialEmployeeList.filter(employee => {
      return employee.name.first.includes(cleanedInput) || employee.name.last.includes(cleanedInput)
    })
    setEmployees(foundEmployees)
  }

  function handleFirstNameSort() {
    console.log("clicked")
    const sortedEmployees = employees.sort((a, b) => {
      const aFirstName = a.name.first;
      const bFirstName = b.name.first;
      return aFirstName.localeCompare(bFirstName)
    });
    setEmployees([...sortedEmployees])
  }


  return (
    <Router>
      <main className="wrapper">
        <h1>Employee Directory!</h1>
        <Search
          handleInputChange={(event) => handleInputChange(event)}
        />
        <div className="d-flex justify-content-center">
          <table className="table table-dark ">
            <TableHead
              handleFirstNameSort={handleFirstNameSort}
            />
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