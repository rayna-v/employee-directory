import React, { useEffect, useState } from "react";
import "./style.css";
// import Employee from "../Employee"
// import API from "../../utils/API";

function Row(props) {


    return (
        // <h1>broken</h1>
        <tbody>

            {/* {props.employees.map((emp) => ( */}
            <tr>
                <th scope="row">
                    <img alt={"photo-" + props.last} src={props.photo} />
                </th>
                <th scope="row">
                    {props.first}
                </th>
                <th scope="row">
                    {props.last}
                </th>
                <th scope="row">
                    {props.age}
                </th>
                <th scope="row">
                    {props.phone}
                </th>
                <th scope="row">
                    {props.email}
                </th>
                {/* <Employee /> */}
            </tr>
            {/* ))} */}

        </tbody>
    )
}


export default Row;