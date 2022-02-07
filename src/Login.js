import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    var forms = document.querySelectorAll(".needs-validation");

    Array.prototype.slice.call(forms)
      .forEach(
        (form) => {
          form.addEventListener("submit", (e) => {
            if (!form.checkValidity()) {
              e.preventDefault();
              e.stopPropagation();
            }
            else {
              console.log("hello world!");
              setEmail("");
              setPassword("");
              navigate("/");
            }
            form.classList.add("was-validated");
          }, false);

        }
      )
  }


  return (
    <div>
      <div className='container login'>
        <div className="d-flex h-100 flex-column justify-content-center">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-8">

              <form id='form' className="border border-secondary p-5 row g-3 needs-validation " noValidate>
                <div className="mb-3 ">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <div id="exampleInputEmail2" className='small'></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div id="exampleInputPassword2" className='small'></div>
                </div>
                <div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                  </div>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" className="btn btn-outline btn-lg" onClick={handleSubmit}>Sign in</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;
