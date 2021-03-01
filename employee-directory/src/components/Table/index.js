import React from "react";
import "./style.css";
import Row from "../Row";
// import API from "../../utils/API";


function Table(props) {
    console.log(props)
    // const [employees, setEmployees] = useState();
    // console.log(employees)
    // useEffect(() => {
    //     API.search().then(res => {
    //         console.log(res.data.results)
    //         setEmployees(res.data.results);
    //         console.log("Employee State:");
    //         console.log(employees);
    //         // console.log(employees[0]);
    //     });
    //     // fetch("https://randomuser.me/api/?results=10")
    //     //     .then(res => res.json())
    //     //     .then(json => setEmployees(json.results))
    // }, []);

    return (

        {
            props.employees.map(emp => {
                return (
                    < Row
                        photo={emp.picture.thumbnail}
                        first={emp.name.first}
                        last={emp.name.last}
                        age={emp.dob.age}
                        phone={emp.phone}
                        email={emp.email}
                    />
                )
            })
        }

            </table >
        </div >
    )
}

export default Table;