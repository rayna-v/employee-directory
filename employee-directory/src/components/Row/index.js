import React, { useEffect, useState } from "react";
import "./style.css";
// import Employee from "../Employee"
import API from "../../utils/API";

function Row() {
    const [employees, setEmployees] = useState();

    useEffect(() => {
        API.search().then(res => {
            setEmployees(res.data.results);
            console.log("Employee State:");
            console.log(employees[0]);
        });
    }, []);

    return (
        <div>
            <tr>
                <th scope="row">
                    <img alt={"photo-" + employees[0].id.value} src={employees[0].picture.thumbnail} />

                </th>
                {/* <Employee /> */}
            </tr>
        </div>
    )
}


export default Row;