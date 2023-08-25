import React from 'react';
import {useNavigate} from "react-router-dom";

const SignInJS = () => {
    const navigate = useNavigate()
    const handleSignIn = () => {
        navigate("/")
    }

    return (
        <div className="page-header align-items-start min-vh-100 d-flex flex-column justify-content-center"
             style={{background: "#3b5d50"}}
        >
            <span className="mask bg-gradient-dark opacity-6"/>
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-12 mx-auto">
                        <div className="card z-index-0 fadeIn3 fadeInBottom">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                    <h4 className="font-weight-bolder text-center mt-2 mb-0">
                                        Giriş Yap
                                    </h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <form className="text-start">
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control"/>
                                    </div>
                                    <div className="input-group input-group-outline mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <div className="form-check form-switch d-flex align-items-center mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="rememberMe"
                                        />
                                        <label
                                            className="form-check-label mb-0 ms-2"
                                            htmlFor="rememberMe"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn bg-gradient-primary w-100 my-4 mb-2"
                                            onClick={handleSignIn}
                                        >
                                            Giriş Yap
                                        </button>
                                    </div>
                                    <p className="mt-4 text-sm text-center">
                                        Hesabınız yok mu?
                                        <a
                                            href="/#"
                                            className="text-primary text-gradient font-weight-bold"
                                        >
                                            Kaydolun
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SignInJS;
