import React from 'react';
import {useNavigate} from "react-router-dom";



const SignInJS = () => {
  const navigate = useNavigate()
  const handleSignIn = () => {
    navigate("/")
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title">Giriş Yap</span>
            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter username"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Username"
              />
              <span className="focus-input100" />
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span className="focus-input100" />
            </div>
            <div className="container-login100-form-btn mt-5">
              <button className="login100-form-btn" onClick={handleSignIn}>Giriş Yap</button>
            </div>
            <div className="flex-col-c p-t-50 p-b-40">
              <span className="txt1 p-b-9">Hesabınız yok mu?</span>
              <a href="/signup" className="txt3">
                Kayıt ol
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>



  );
}

export default SignInJS;
