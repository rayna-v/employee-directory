import React from "react";
import "./style.css";

function Employee(props) {
    console.log("Employee" + props)
    return (
        <tr>
            <td>
                {props.id}
            </td>
            <td>
                <img alt={"photo-" + props.id} src={props.photo} />
            </td>
            <td>
                {props.first}
            </td>
            <td>
                {props.last}
            </td>
            <td>
                {props.age}
            </td>
            <td>
                {props.phone}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.city}
            </td>

        </tr>
    )
}

export default Employee;