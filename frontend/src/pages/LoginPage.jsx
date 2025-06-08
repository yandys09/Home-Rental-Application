import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign In</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          className="p-3 border rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          required
          vlaue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-3 border rounded-lg"
          type="password"
          placeholder="Password"
          name="password"
          required
          vlaue={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer">
          Login
        </button>
      </form>

      <div className="mt-5 flex gap-2">
        <p>Don't have an account?</p>
        <Link to={"/register"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
