import React from "react";

export default function Register() {

    let initialState = {
        name : "",
        email: "",
        password: "",
        isMember: "true"
    }
  return (
    <form className="registration">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
      <div>
          Already a user? 
          <a href = '/login'>Login</a>
      </div>
    </form>
  );
}
