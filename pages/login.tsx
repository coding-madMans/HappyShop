
import { NextPage } from "next";
import Link from "next/link";
import { Router } from "next/router";

const Login: NextPage = () => {

  return (
    <div className="row">
      <div className="container-md col-6">
        <form onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          console.log(form);
          let data = {} as any;
          data["Name|Email"] = (form[0] as HTMLInputElement).value;
          data["Password"] = (form[1] as HTMLInputElement).value;
          await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then(data => {
            return data.json()
          }).then(data => {
            if (data.success){
              localStorage.setItem("id", data.id);
              setTimeout(() => {
                window.location.href = "/";
            }, 300);
            }
          })
        }}>
          <input
            className="form-control" type="text" 
            placeholder="email or user name" required id="email-userName"
          />
          <input
            className="form-control" type="Password" 
            placeholder="password" required id="password"
          /> <br />
          <Link href="/forgotToImplememt">Forgot Password?</Link><br />
          <button type="submit" className="btn btn-outline-primary">Login in</button>
          <p>Not a Registered User? <Link href="/register">Register</Link></p>
        </form>
      </div>
    </div>
  ) 
}

export default Login;
