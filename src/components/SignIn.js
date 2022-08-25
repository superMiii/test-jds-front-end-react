import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/sign_in.css";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) navigate("/data");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email atau Password tidak boleh kosong",
      });
    } else if (email !== "admin@gmail.com") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email tidak terdaftar",
      });
    } else if (password !== "bansospemerintah") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password salah",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Yeaayy",
        text: "Login Berhasil",
      });
      const data = {
        email: email,
        password: Math.random() * 200,
      };
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/", { replace: true });
    }
  };
  return (
    <div className="container-sign-in">
      <div className="sign-in">
        <h1>Sign In</h1>
        <form id="formLogin" className="form-login" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-submit" id="btnLogin" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
