import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
  const { singIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
    const handleLogin =e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        singIn(email,password)
        .then(result =>{
          console.log(result.user)
          navigate(location?. state ?location.state:'/')
        })
        .catch(error =>{
          console.log(error)
        })
    }
    return (
        <div>
            <Navbar/>
      <div className="">
        <h1 className="text-3xl text-center my-10">Please Login Now !</h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto " >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p className="text-center my-6">Dont’t Have An Account ? <Link className="btn-link" to='/register'>Register</Link></p>
      </div>
        </div>
    );
};

export default Login;