import React, { useState } from "react";

export default function StatewithObject() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;



  const handleChange = (e) => {
    if (e.target.name === "name") {
      setUser({ name: e.target.value, email, password });
    }
    if (e.target.name === "email") {
      setUser({ name, email: e.target.value, password });
    }
    if (e.target.name === "password") {
      setUser({ name, email, password: e.target.value });
    }
  };

  const handleSub = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1>Regestation Form</h1>
      <form action="">
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            
            id=""
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            
            id=""
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            
            id=""
            required
          />
        </div>
        <div>
          <input
            type="submit"
            onClick={handleSub}
            name="submit"
            id=""
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
