import axios from "axios";
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

  //   const [data, setData] = useState({ name: "", email: "", password: "" });

  //   const handle = (e) => {
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   };
  //   const submitForm = (e) => {
  //     e.preventDefault();
  //     console.log(data);
  //   };
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
    <>
      <h1 style={{ justifyItems: "center" }}>Form Post API</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fname}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>
              <td>
                <Link to={`/update/${item.id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={(e) => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {userData.map((item) => {
        return (
          <>
            <div key={item.id}>
              {item.id}&nbsp;{item.fname}&nbsp;{item.lastname}&nbsp; &nbsp;
              {item.age}
              <div>
                <Link to={`/update/${item.id}`}>
                  <button>Update</button>
                </Link>{" "}
                &nbsp; &nbsp;&nbsp;{" "}
                <button onClick={(e) => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          </>
        );
      })} */}
      <Link to="/addnew">
        <button> ADD New + </button>
      </Link>
      {/* <form onSubmit={submitForm}>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Enter Name"
          onChange={handle}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter Email"
          onChange={handle}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter Password"
          onChange={handle}
        />
        <button type="submit">Submit</button>
      </form> */}
    </>
  );
}

export default Login;
