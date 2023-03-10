import React from 'react'
import { useForm, Link } from '@inertiajs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export default function Login({urls}) {
    const { data, setData, post, reset, errors} = useForm({
        email: '',
        password: '',
        remember: false
    });

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
            <div className="card border-0 shadow">
                <div className="card-body">
                    <form onSubmit={handleSubmit} method="post">
                        <h3 className="text-center fw-bold mt-2 mb-5">Sign In</h3>
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input type="text" className={'form-control ' + (errors.email && 'is-invalid')} placeholder="Email address" onChange={ev => setData('email', ev.target.value)}
                                value={data.email} aria-label="Email address" />
                            {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" className="form-control" placeholder="Password" onChange={ev => setData('password', ev.target.value)}
                                value={data.password} aria-label="Password" />
                        </div>
                        <div className="d-flex justify-content-center-between mb-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={data.remember} id="remember-me" onChange={ev => setData('remember', ev.target.checked)}/>
                                <label className="form-check-label" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Sign In</button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <small>Don't have an account? <Link href={urls['register']}>Sign Up</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}
