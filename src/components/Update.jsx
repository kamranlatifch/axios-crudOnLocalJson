import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error in update form", err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/users/" + id, data).then((resp) => {
      alert("updated successfully");
      navigate("/");
    });
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div style={{ display: "grid" }}>
          <div>
            <label htmlFor="name">ID:</label>
            <input type="text" name="fname" disabled value={data.id} />
          </div>
          <div>
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              name="fname"
              value={data.fname}
              onChange={handleData}
            />
          </div>
          <div className="">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={handleData}
            />
          </div>
          <div className="">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleData}
            />
          </div>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
