import React from "react";
import "./style.css";
import Row from "../Row";
// import API from "../../utils/API";


function TableHead(props) {


    return (
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

    )
}

export default TableHead;