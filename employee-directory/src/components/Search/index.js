import React from "react";
import "./style.css";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        search: ""
    }
    render() {
        return (
            <div>
                <form className="search" >
                    <div className="form-group">
                        <label htmlFor="language">Employee Search:</label>
                        <input
                            // value={props.search}
                            // onChange={props.handleInputChange}
                            name="term"
                            list="term"
                            type="text"
                            className="form-control"
                            placeholder="Enter first or last name to begin"
                            id="term"
                        />
                        <button type="submit"
                            // onClick={props.handleFormSubmit} 
                            className="btn btn-success">
                            Search
        </button>
                    </div>
                </form>
            </div >
        )
    }
}

export default Search;