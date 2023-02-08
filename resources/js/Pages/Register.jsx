import React from 'react';
import {useForm, Link} from '@inertiajs/react';

export default function Register() {
    const {data, setData, post, errors} = useForm({
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(data);
    }

    return (
        <div className="page page-auth page-register">
            <div className="card border-0 shadow">
                <div className="card-body">
                    <form onSubmit={handleSubmit} method="post">
                        <h3 className="text-center fw-bold mt-2 mb-5">Sign Up</h3>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-uppercase fw-bold small-label">Email address</label>
                                <input type="text" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-uppercase fw-bold small-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password-confirm" className="form-label text-uppercase fw-bold small-label">Password (confirm)</label>
                                <input type="password" className="form-control" id="password-confirm" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-1">Sign up</button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <small>Already have an account? <Link href="/auth/login">Sign In</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}