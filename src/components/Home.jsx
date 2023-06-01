// import axios from "axios";
// import "./Home.css";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// function Login() {
//   const [userData, setUserData] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:3000/users").then((response) => {
//       console.log(response);
//       setUserData(response.data);
//     });
//   }, []);

//   const navigate = useNavigate();

//   const handleDelete = (id) => {
//     const confirm = window.confirm("Do you want to delete");
//     if (confirm) {
//       axios
//         .delete("http://localhost:3000/users/" + id)
//         .then((res) => {
//           alert("Record has been deleted Successfully");
//           navigate("/");
//         })
//         .catch((err) => console.log("delete error", err));
//     }
//   };
//   return (
//     <>
//       <h1 style={{ justifyItems: "center" }}>Form Post API</h1>

//       <table className="user-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.fname}</td>
//               <td>{item.lastname}</td>
//               <td>{item.age}</td>
//               <td>
//                 <Link to={`/update/${item.id}`}>
//                   <button className="action-button">Update</button>
//                 </Link>
//                 <button
//                   className="action-button"
//                   onClick={(e) => handleDelete(item.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* {userData.map((item) => {
//         return (
//           <>
//             <div key={item.id}>
//               {item.id}&nbsp;{item.fname}&nbsp;{item.lastname}&nbsp; &nbsp;
//               {item.age}
//               <div>
//                 <Link to={`/update/${item.id}`}>
//                   <button>Update</button>
//                 </Link>{" "}
//                 &nbsp; &nbsp;&nbsp;{" "}
//                 <button onClick={(e) => handleDelete(item.id)}>Delete</button>
//               </div>
//             </div>
//           </>
//         );
//       })} */}
//       <Link to="/addnew">
//         <button className="action-button" style={{ marginTop: 10 }}>
//           {" "}
//           ADD New +{" "}
//         </button>
//       </Link>
//       {/* <form onSubmit={submitForm}>
//         <input
//           type="text"
//           name="name"
//           value={data.name}
//           placeholder="Enter Name"
//           onChange={handle}
//         />
//         <input
//           type="email"
//           name="email"
//           value={data.email}
//           placeholder="Enter Email"
//           onChange={handle}
//         />
//         <input
//           type="password"
//           name="password"
//           value={data.password}
//           placeholder="Enter Password"
//           onChange={handle}
//         />
//         <button type="submit">Submit</button>
//       </form> */}
//     </>
//   );
// }

// export default Login;
import axios from "axios";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          alert("Record has been deleted Successfully");
          navigate("/");
        })
        .catch((err) => console.log("delete error", err));
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Form Post API</h1>

      <table className="table table-striped mt-4 border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.fname}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>
              <td>
                <Link to={`/update/${item.id}`}>
                  <button className="btn btn-primary me-2">Update</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center">
        <Link to="/addnew">
          <button className="btn btn-success mt-4">Add New +</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
