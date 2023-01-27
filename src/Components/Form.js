import React, { useState } from "react";
import style from "./form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handlSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
        name,
        email,
        password
    }
    console.log(userInfo)
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form action="" onSubmit={handlSubmit}>
        <div className={style.formgroup}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={handleNameChange}
          />
        </div>

        <div className={style.formgroup}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </div>

        <div className={style.formgroup}>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>

        <div>
          <input type="Submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
