import React, { useState } from "react";
import "./style.css";

function Search(props) {
    console.log(props)
    const [searched, setSearched] = useState({
        search: ""
    })
    const [sort, setSort] = useState({
        display: "default",
        sortEmps: []
    })
    console.log(searched)
    function handleInputChange(event) {
        setSearched({
            [event.target.name]: event.target.value
        });
        searching();
    }
    function searching(props) {
        props.forEach(name => {
            if (name.includes(searched)) {

            }
        })
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("submitted")
    }
    return (
        <div>
            <form className="search" >
                <div className="form-group">
                    <label htmlFor="language">Employee Search:</label>
                    <input
                        // value={props.search}
                        onChange={handleInputChange}
                        name="term"
                        list="term"
                        type="text"
                        className="form-control"
                        placeholder="Enter first or last name to begin"
                        id="term"
                    />
                    <button type="submit"
                        onClick={handleFormSubmit}
                        className="btn btn-success">
                        Search
        </button>
                </div>
            </form>
        </div >
    )
    // }
}

export default Search;