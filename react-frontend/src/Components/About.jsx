import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import pic from "";
function About() {

  const navigate = useNavigate();
  const callAboutPage = async () => {

    try {

      const res = await fetch('/about', {

        method: "GET",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
        },
        credentials: "include" //to share cookies

      });

      const data = await res.json();

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate("/login");
    }

  }


  useEffect(() => {
    callAboutPage();

  }, []);

  return (
    <>
      <div className="container h-50 shadow p-3 mb-5 bg-white rounded mt-5">
        <form method="GET">
          <div className="row">
            <div className="col-md-4 mt-3 h-75 ">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-50"
              />
            </div>
            <div className="col-md-6 mt-3">
              <div className="classname-head">
                <h5>Fidal Mathew</h5>
                <h6>Frontend Developer</h6>

                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      // aria-current="page"
                      href="#home"
                      role="tab"
                    >
                      ONE
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link "
                      id="profile-tab"
                      data-toggle="tab"
                      // aria-current="page"
                      href="#profile"
                      role="tab"
                    >
                      TWO
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2 ">
              <input
                name="btnAddMore"
                type="submit"
                className="w-75"
                value="Edit profile"
              />
            </div>
          </div>

          <div className="row">
            {/* left side url */}

            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Link</p>

                <a
                  href="https://dev.to/fidalmathew"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev Blog
                </a>
                <br />

                <a
                  href="https://twitter.com/fidalmathew10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <br />

                <a
                  href="https://www.linkedin.com/in/fidal-mathew-82aba7200/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <br />

                <a
                  href="https://github.com/FidalMathew"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <br />
              </div>
            </div>
            {/* right side data toggle */}

            <div className="col-md-8 pl-5">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                // aria-labelledby="home-tab"
                >
                  {/* dfhhkfskfhkjds */}
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>54353245423</p>
                    </div>

                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Fidal</p>
                    </div>

                    <div className="col-md-6">
                      <label>Proffesion</label>
                    </div>
                    <div className="col-md-6">
                      <p>Student</p>
                    </div>

                    <div className="col-md-6">
                      <label>Phone No</label>
                    </div>
                    <div className="col-md-6">
                      <p>93211 13113</p>
                    </div>

                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>fidal15perfect@gmail.com</p>
                    </div>
                  </div>
                </div>


                <div
                  className="tab-pane  "
                  id="profile"
                  role="tabpanel"
                // aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>00000000000</p>
                    </div>

                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Fidal</p>
                    </div>

                    <div className="col-md-6">
                      <label>Proffesion</label>
                    </div>
                    <div className="col-md-6">
                      <p>Student</p>
                    </div>

                    <div className="col-md-6">
                      <label>Phone No</label>
                    </div>
                    <div className="col-md-6">
                      <p>93211 13113</p>
                    </div>

                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>fidal15perfect@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
