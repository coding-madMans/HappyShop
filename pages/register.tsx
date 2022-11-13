import { NextPage } from "next";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <div className="row">
      <div className="container-sm col-4 d-flex justify-content-center text-center">
        <form className="from-box" id="form-box">
        <input
            className="form-control" type="text" 
            placeholder="user name" required id="userName"
          /> <br />
          <input
            className="form-control" type="Email" 
            placeholder="email" required id="email"
          />
          <input
            className="form-control" type="Password" 
            placeholder="password" required id="password"
          /> 
          <input
            className="form-control" type="Password" 
            placeholder="password again" required id="repassword"
          /> <br />
          <button type="submit" className="btn btn-outline-primary">Sign up</button>
          <p>A Registered User? <Link href="/login">Login</Link></p>
        </form>
      </div>
    </div>
  ) 
}

export default Register;
