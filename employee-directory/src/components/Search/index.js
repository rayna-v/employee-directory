import React, { useState } from "react";
import "./style.css";

function Search(props) {

    return (
        <div>
            <form className="search" >
                <div className="form-group">
                    <label htmlFor="language">Employee Search:</label>
                    <input
                        onChange={props.handleInputChange}
                        name="term"
                        list="term"
                        type="text"
                        className="form-control"
                        placeholder="Enter first or last name to begin"
                        id="term"
                    />
                </div>
            </form>
        </div >
    )
    // }
}

export default Search;