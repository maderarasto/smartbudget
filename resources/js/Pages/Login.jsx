import React from 'react'
import { useForm, Link } from '@inertiajs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import Layout from "./Layout";

export default function Login({urls}) {
    const { data, setData, post, reset, errors} = useForm({
        email: '',
        password: '',
        remember: false
    });

    function handleChange(ev) {
        const key = ev.target.id;
        const value = ev.target.value;

        setData(key, value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        post(urls['login'], {
            onError: handleError
        });
    }

    function handleError() {
        reset('password');
    }

    return (
        <div className="page page-auth page-login">
            {/*<div>*/}
            {/*    <h1 className="title"><span className="text-primary">Smart</span>Budget</h1>*/}
            {/*    <span className="subtitle">Manage your budget</span>*/}
            {/*</div>*/}
            <div className="card w-100 border-0 shadow">
                <div className="card-body">
                    <h3 className="text-center fw-bold mt-2 mb-5">Sign In</h3>
                    <form className="mb-3" method="post" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="email">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email" onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="password">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password" onChange={handleChange} />
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={data.remember} id="remember-me" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>
                            <Link href="#">Forgot password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-1">Sign In</button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <small>Don't have an account? <Link href={urls['register']}>Sign Up</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.layout = (page) => {
    return <Layout children={page} bsColClass={page.props.bs_col_class} />
};

