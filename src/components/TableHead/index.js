import React from "react";
import "./style.css";
import Row from "../Row";


function TableHead(props) {


    return (
        <thead>
            <tr>
                <th scope="col">Photo</th>
                <th scope="col" onClick={props.handleFirstNameSort}>First</th>
                <th scope="col" onClick={props.handleLastNameSort}>Last</th>
                <th scope="col">Age</th>
                <th scope="col">Phone #</th>
                <th scope="col">Email</th>
            </tr>
        </thead>

    )
}

export default TableHead;