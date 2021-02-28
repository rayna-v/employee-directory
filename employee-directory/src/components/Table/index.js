import React from "react";
import "./style.css";
import Row from "../Row";

function Table(props) {
    return (
        <div className="d-flex justify-content-center">
            <table className="table table-dark ">
                <thead>
                    <tr>
                        <th scope="col">ID #</th>
                        <th scope="col">Photo</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Age</th>
                        <th scope="col">Phone #</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    < Row />
                </tbody>
            </table>
        </div>
    )
}

export default Table;