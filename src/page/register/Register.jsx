import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser} =useContext(AuthContext)
    const handleRegister =e=>{
        e.preventDefault()
        const form =new FormData(e.currentTarget)
        const name =form.get('name')
        const photo =form.get('photoUrl')
        const email =form.get('email')
        const password =form.get('password')
        console.log(name,photo,email,password)
        createUser(email,password)
        .then((result) => {
         console.log(result.user)
        })
        .catch((error) => {
         console.log(error)
        });
      
    }
    return (
        <div>
            <Navbar/>
      <div className="">
        <h1 className="text-3xl text-center my-10">Please Register</h1>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto " >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photoUrl" placeholder="Photo" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </form>
        <p className="text-center my-6">Already Have An Account ? <Link className="btn-link" to='/login'>Login</Link></p>
      </div>
        </div>
    );
};

export default Register;