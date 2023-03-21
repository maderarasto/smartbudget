import React from 'react';
import {useForm, Link} from '@inertiajs/react';
import {useTranslation} from "react-i18next";

import Layout from "./Layouts/Layout";

export default function Register({urls}) {
    const {t} = useTranslation();
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
            {/*<div>*/}
            {/*    <h1 className="title"><span className="text-primary">Smart</span>Budget</h1>*/}
            {/*    <span className="subtitle">Manage your budget</span>*/}
            {/*</div>*/}
            <div className="card w-100 border-0 shadow">
                <div className="card-body">
                    <form className="mb-3" method="post" onSubmit={handleSubmit}>
                        <h3 className="text-center fw-bold mt-2 mb-5">{t('titles.Create account')}</h3>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-uppercase fw-bold small-label">{t('labels.name')}</label>
                            <input type="text" className={`form-control${errors.name ? ' is-invalid' : ''}`} id="name" value={data.name} onChange={handleChange} />
                            {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                                <label htmlFor="email" className="form-label text-uppercase fw-bold small-label">{t('labels.email')}</label>
                                <input type="text" className={`form-control${errors.email ? ' is-invalid' : ''}`} id="email" value={data.email} onChange={handleChange} />
                                {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-uppercase fw-bold small-label">{t('labels.password')}</label>
                                <input type="password" className={`form-control${errors.password ? ' is-invalid' : ''}`} id="password" value={data.password} onChange={handleChange} />
                                {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password_confirmation" className="form-label text-uppercase fw-bold small-label">{t('labels.password_confirm')}</label>
                                <input type="password" className="form-control" id="password_confirmation" value={data.password_confirmation} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-1">{t('phrases.Create account')}</button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <small>{t('phrases.Already have an account?')} <Link href={urls['login']}>{t('phrases.Sign in')}</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}

Register.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bs_col_class} />
};
