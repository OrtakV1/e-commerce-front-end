import React from 'react';
import {useNavigate} from 'react-router-dom';

const SignUpJS = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signin');
  };

  return (
    <section className="vh-100" style={{backgroundColor: '#3b5d50'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign Up</h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={handleSignUp}
                >
                  Kayıt Ol
                </button>
                <hr className="my-4"/>
                <button
                  className="btn btn-lg btn-block btn-primary"
                  style={{backgroundColor: '#3b5998'}}
                  type="button"
                  onClick={() => navigate('/signin')} // Ana sayfaya yönlendir
                >
                  Zaten hesabınız var mı? Giriş yapın
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpJS;
