import { NextPage } from "next";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <div className="row">
      <div className="container-md col-6">
        <form onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          console.log(form);
          let data = {} as any;
          data["Name"] = (form[0] as HTMLInputElement).value;
          data["Email"] = (form[1] as HTMLInputElement).value;
          data["Contact"] = (form[2] as HTMLInputElement).value;
          data["DOB"] = (form[3] as HTMLInputElement).value;
          data["Password"] = (form[4] as HTMLInputElement).value;
          console.log(data);
          await fetch("/api/regester", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(data)})
              .then(data => {
                  console.log(data);
                  return data.json();
              })
              .then(data => {
                  setTimeout(() => {
                    window.location.href = "/login";
                  }, 300);
              })
              .catch(err => {console.error(err);});
        }}>
        <input
            className="form-control" type="text" 
            placeholder="user name" required id="userName"
          /> <br />
          <input
            className="form-control" type="Email" 
            placeholder="email" required id="email"
          />

          <input className="form-control" type="text" placeholder="Contact no" name="contactNo"/><br />
          <input className="form-control" type="date" placeholder="Date of Birth" name="date"/><br />

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
