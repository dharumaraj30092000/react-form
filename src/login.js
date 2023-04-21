import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getDetails from "./login.json";

let checkUser = getDetails;

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correctionEmail, setCorrectionEmail] = useState(false);
  const [correctionPassword, setCorrectionPassword] = useState(false);

  let checking = (event) => {
    event.preventDefault();
    checkUser.forEach((val) => {
      if (val.email === email && val.password === password) {
        navigate("/home");
      }
      if (val.email !== email || email === "") {
        setCorrectionEmail(true);
      }
      if (val.password !== password || password === "") {
        setCorrectionPassword(true);
      }
    });
  };
  return (
    <div>
      <h1 className="w-50 text-center">login</h1>
      <form className="w-50">
        <div className="d-flex justify-content-center">
          <div className="ms-3 mb-3">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {correctionEmail && <p>email is worng</p>}
          </div>
          <div className="ms-3 mb-3">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(parseInt(e.target.value))}
            />
            {correctionPassword && <p>password is worng</p>}
          </div>
        </div>
        <div className="text-center">
          <button className="ps-3 pe-3 pt-2 pb-2" onClick={(e) => checking(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
