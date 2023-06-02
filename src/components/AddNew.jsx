// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// function AddNew() {
//   const [data, setData] = useState({ fname: "", lastname: "", age: "" });
//   const navigate = useNavigate();
//   const handleData = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3000/users", data)
//       .then((resp) => {
//         alert("added successfully");
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log("error in adding new", err);
//       });
//   };
//   return (
//     <div style={{ justifyContent: "center" }}>
//       <h1>Add New Items</h1>
//       <div style={{ display: "grid" }}>
//         <div>
//           <label htmlFor="name">First Name:</label>
//           <input type="text" name="fname" onChange={handleData} />
//         </div>
//         <div className="">
//           <label htmlFor="lastname">Last Name:</label>
//           <input type="text" name="lastname" onChange={handleData} />
//         </div>
//         <div className="">
//           <label htmlFor="age">Age:</label>
//           <input type="number" name="age" onChange={handleData} />
//         </div>
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default AddNew;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNew() {
  const [data, setData] = useState({ fname: "", lastname: "", age: "" });
  const navigate = useNavigate();

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", data)
      .then((resp) => {
        alert("Added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in adding new", err);
      });
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card w-50 text-center">
        <div className="card-body">
          <h1 className="card-title">Please Add New Items</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                name="fname"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age:
              </label>
              <input
                type="number"
                name="age"
                className="form-control"
                onChange={handleData}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNew;
