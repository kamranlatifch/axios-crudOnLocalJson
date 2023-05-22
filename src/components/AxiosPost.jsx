import axios from "axios";
import React, { useState } from "react";

function AxiosPost() {
  const [data, setData] = useState({ fname: "", lastname: "" });
  //   const [inputData, setInputData] = useState("");
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users", data).then((response) => {
      console.log(response);
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/users", data).then((response) => {
      console.log(response);
    });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete("http://localhost:3000/users").then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <h1>AXIOS POST</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={handleData}
        />
        <br />
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={data.lastname}
          onChange={handleData}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default AxiosPost;
