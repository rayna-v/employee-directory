import React, { useEffect, useState } from "react";
import "./style.css";

function Row(props) {
    return (
        <tbody>

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
            </tr>
        </tbody>
    )
}

export default Row;