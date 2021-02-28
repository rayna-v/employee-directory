import React from "react";
import "./style.css";
import Search from "../Search"
import Table from "../Table"


function Wrapper(props) {
    console.log(props.children)
    return (
        <div>
            <main className="wrapper">
                <h1>Employee Directory</h1>
                <Search />
                <Table />
                {props.children}</main>;
        </div>
    )
}

export default Wrapper;