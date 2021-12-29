import React from "react";
import { NavLink } from "react-router-dom";
function Errorpage() {
  return (
    <div className="container mx-auto mt-5">
      <div className="p-3 text-center">
        <h1>404</h1>
        <h2>We are sorry, page not found!</h2>
        <p>
          The page you are looking for might have been removed or it's
          temporarily unavailable.
        </p>
        <NavLink to="/">
          <button class="btn btn-primary">Go to Home Page</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Errorpage;
