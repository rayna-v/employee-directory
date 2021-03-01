import React, { useEffect, useState } from "react";
import "./style.css";
import Search from "../Search"
// import Table from "../Table"
import Row from "../Row"

// import API from "../../utils/API";


function Wrapper(props) {
    // console.log(props.children)
    const [employees, setEmployees] = useState();
    console.log(employees)
    useEffect(() => {
        // API.search().then(res => {
        //     console.log(res.data.results)
        //     setEmployees(res.data.results);
        //     console.log("Employee State:");
        //     console.log(employees);
        //     // console.log(employees[0]);
        // });
        fetch("https://randomuser.me/api/?results=10")
            .then(res => res.json())
            .then(json => setEmployees(json.results))
    }, []);
    let names = [];
    // employees.map(emp => {
    //     names.push(emp.name.first)
    //     names.push(emp.name.last)
    // })
    console.log(names)
    return (
        <div>
            <main className="wrapper">
                <h1>Employee Directory!</h1>
                <Search
                    names={names}
                />
                <div className="d-flex justify-content-center">
                    <table className="table table-dark ">
                        <thead>
                            <tr>
                                <th scope="col">Photo</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Age</th>
                                <th scope="col">Phone #</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
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
                    </table>
                </div>
            </main>
        </div>
    )
}

export default Wrapper;