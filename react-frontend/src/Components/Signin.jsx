import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "contentType": "application/json"
      },
      body: JSON.stringify({
        Email,
        Password
      })
    });

    const data = await res.json()

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials!");
    } else {
      window.alert("Login Successful");
      navigate("/");
    }
  }

  return (
    <section className="signup">
      <div className="container row pt-5 pb-5">
        <div className="col-md-7 .col-xs-10 col-sm-10 mx-auto">
          <form method="POST">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={Email}
                name="Email"
                onChange={(e) => { setEmail(e.target.value) }}

              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="Password"
                value={Password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>

            <button type="submit" class="btn btn-primary" onClick={LoginUser}>
              Log In
            </button>

            <NavLink className="d-block pt-2" to="/signup">
              Create a New Account
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
