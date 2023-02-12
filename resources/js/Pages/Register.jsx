import React from 'react';
import {useForm, Link} from '@inertiajs/react';

export default function Register({urls}) {
    const {data, setData, post, reset, errors} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    function handleChange(ev) {
        const key = ev.target.id;
        const value = ev.target.value;

        setData(key, value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        post(urls['register'], {
            onError: handleError
        });
    }

    function handleError() {
        reset('password', 'password_confirmation');
    }

    return (
        <div className="page page-auth page-register">
            <div className="card border-0 shadow">
                <div className="card-body">
                    <form onSubmit={handleSubmit} method="post">
                        <h3 className="text-center fw-bold mt-2 mb-5">Sign Up</h3>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-uppercase fw-bold small-label">Name</label>
                            <input type="text" className="form-control" id="name" value={data.name} onChange={handleChange} />
                            {errors.name && <div className="invalid-feedback d-block">Error: {errors.name}</div>}
                        </div>
                        <div className="mb-3">
                                <label htmlFor="email" className="form-label text-uppercase fw-bold small-label">Email address</label>
                                <input type="text" className="form-control" id="email" value={data.email} onChange={handleChange} />
                                {errors.email && <div className="invalid-feedback d-block">Error: {errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-uppercase fw-bold small-label">Password</label>
                                <input type="password" className="form-control" id="password" ref={passwordRef} value={data.password} onChange={handleChange} />
                                {errors.password && <div className="invalid-feedback d-block">Error: {errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password_confirmation" className="form-label text-uppercase fw-bold small-label">Password (confirm)</label>
                                <input type="password" className="form-control" id="password_confirmation" value={data.password_confirmation} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-1">Sign up</button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <small>Already have an account? <Link href={urls['login']}>Sign In</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}
