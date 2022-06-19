import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../Store/form.action";

const Register = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleonChange = (e) => {
    let { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm(form));
  };
  return (
    <div>
      <h1>Registeration Form</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            // border: "1px solid",
            width: "40%",
            gap: "20px",
            margin: "auto",
          }}
        >
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={form.name}
            onChange={handleonChange}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={form.email}
            onChange={handleonChange}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={form.password}
            onChange={handleonChange}
          />
          <input
            type="text"
            placeholder="Enter your UserName"
            name="username"
            value={form.username}
            onChange={handleonChange}
          />
          <input
            type="number"
            placeholder="Enter your Mobile"
            name="moblie"
            value={form.mobile}
            onChange={handleonChange}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={form.description}
            onChange={handleonChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
