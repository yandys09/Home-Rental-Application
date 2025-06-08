import React, { useEffect, useState } from "react";
import uploadProfilePic from "../assets/upload.png";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  // console.log("formData : ", formData);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerForm = new FormData();
      for (var key in formData) {
        registerForm.append(key, formData[key]);
      }
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: registerForm,
      });

      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign up</h1>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="p-3 border rounded-lg"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 border rounded-lg"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 border rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 border rounded-lg"
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 border rounded-lg"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {!passwordMatch && (
          <p className="text-red-500">Passwords are not matched</p>
        )}

        <input
          id="image"
          type="file"
          name="profileImage"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
          required
        />
        <label htmlFor="image" className="flex item-center gap-3 mt-2 mb-2">
          {formData.profileImage ? (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          ) : (
            <img
              src={uploadProfilePic}
              alt="add profile photo"
              className="w-8 h-8 cursor-pointer"
            />
          )}

          <p className="text-slate-700 text-lg cursor-pointer">
            Upload Your Photo
          </p>
        </label>
        <button
          className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer"
          disabled={!passwordMatch}
        >
          Register
        </button>
      </form>

      <div className="mt-5 flex gap-2">
        <p>Already have an account?</p>
        <Link to={"/login"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
