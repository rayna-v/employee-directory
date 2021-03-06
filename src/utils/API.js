// import axios from "axios";

// const getEmployees = () => {
//     return axios
//         .get("https://randomuser.me/api/")
//         .then(res => {
//             // const employees = res.data;
//             console.log(res)
//             // return employees.map(employee => {
//             //     return {
//             //         id: employee.id.value,
//             //         first: employee.name.first,
//             //         last: employee.name.last,
//             //         age: employee.dob.age,
//             //         city: employee.location.city,
//             //         state: employee.location.state,
//             //         email: employee.email,
//             //         phone: employee.phone,
//             //         photo: employee.picture.thumbnail
//             //     };
//             // });
//         });
// }

// export default getEmployees;
import axios from "axios";
const BASEURL = "https://randomuser.me/api/?seed=abc&nat=us&results=100";
// const APIKEY = "&apikey=trilogy";
// const query = "hound"
export default {
    search: function () {
        return axios.get(BASEURL);
    }
};