import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username == "" || password == "") {
      alert("just write something");
    } else {
      navigate("/app/home"); // Navigate to the home page
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#191c26] h-screen">
      <form
        onSubmit={handleLogin}
        className="text-3xl text-center p-4 rounded-lg h-2/3"
      >
        <h2 className="text-3xl text-center p-12 capitalize text-white">
          please register to proceed
        </h2>
        <div className="flex flex-col gap-3 text-white">
          <div className="flex flex-col gap-3 text-left capitalize ">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="py-2 px-4 rounded- outline-none border-none rounded-3xl bg-[#555b60] "
            />
          </div>
          <div className="flex flex-col gap-3 text-left ">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-4 rounded- outline-none border-none rounded-3xl bg-[#555b60] "
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-2 px-4 rounded- outline-none border-none mt-6 rounded-3xl bg-[#555b60] text-white w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
