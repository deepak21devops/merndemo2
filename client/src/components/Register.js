import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:5001/api/auth/");

      setData(res.data);
      setTimeout(() => {
        setFlag(true);
      }, 2000);

      setFlag(false);
    };
    getUsers();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    const addItem = async () => {
      await axios.post("http://localhost:5001/api/auth/register", {
        username,
        password,
        email,
      });
    };
    addItem();
  };

  return (
    <div>
      <form>
        <label>username</label>
        <input
          type="text"
          placeholder="deepak"
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label>password</label>
        <input
          type="password"
          placeholder="12345"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <label>email</label>
        <input
          type="text"
          placeholder="deepak123@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <button onClick={(e) => handleRegister(e)}>Register</button>
      </form>

      {flag &&
        userData.map((ele) => (
          <div key={ele._id}>
            <h1>{ele.username}</h1>
            <p>{ele.email}</p>
            <p>{ele._id}</p>
          </div>
        ))}
    </div>
  );
}
