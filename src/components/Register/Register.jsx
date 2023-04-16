import React, { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";

const Register = () => {
  const {user, createUser} = useContext(authContext);


    const handleRegisterSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        createUser(email, password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch(error=>{
          console.error(error)
        })
    
}

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <form onSubmit={handleRegisterSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
