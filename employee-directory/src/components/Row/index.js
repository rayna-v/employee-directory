import React, { useEffect, useState } from "react";
import "./style.css";
// import Employee from "../Employee"
import API from "../../utils/API";

function Row() {
    const [employees, setEmployees] = useState();

    useEffect(() => {
        console.log('useEffect')
        // API.search().then(res => {
        //     setEmployees(res.data.results);
        //     console.log("Employee State:");
        //     console.log(employees);
        // });
    }, [employees]);

    return (
        <tbody>
            {employees.map((emp) => {
                <tr>
                    <th scope="row">
                        <img alt={"photo-" + employees.id.value} src={employees.picture.thumbnail} />
                working?
                </th>
                    {/* <Employee /> */}
                </tr>
            }
            )}
        </tbody>
    )
}


export default Row;