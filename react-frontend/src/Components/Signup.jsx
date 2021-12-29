import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {

  // const history = useNavigate();
  const [user, setUser] = useState({

    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  })
  const history = useNavigate();

  let name, value;
  const HandleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }


  const postData = async (e) => {

    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration!");
    }
    else {
      window.alert("Registration Successful!");

      history("/signin");
    }
  }

  return (
    <section className="signup">
      <div className="container row pt-5 pb-5">
        <div className="col-md-7 .col-xs-10 col-sm-10 mx-auto">
          <form method="POST">
            <div class="mb-3 ">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={HandleInputs}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={HandleInputs}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                value={user.phone}
                onChange={HandleInputs}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Work
              </label>
              <input
                type="text"
                name="work"
                value={user.work}
                onChange={HandleInputs}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={HandleInputs}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"
                value={user.cpassword}
                onChange={HandleInputs}
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary" onClick={postData}>
              Register
            </button>
            <NavLink className="d-block pt-2" to="/signin">
              I am a Registered User
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
