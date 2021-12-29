import React from "react";

function Signup() {
  return (
    <section className="signup">
      <div className="container row pt-5 pb-5">
        <div className="col-md-7 .col-xs-10 col-sm-10 mx-auto">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
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
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Phone number
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary btn-info "
              style={{ color: "white" }}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
