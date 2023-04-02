import React, {memo} from 'react'
import { useForm, Link } from '@inertiajs/react';
import { useTranslation} from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons'

import Layout from "./Layouts/Layout";
import logo from "../../img/smartbudget_logo.png";

// Necessary to wrap a page component into memo function
// because InertiaJS making page components load twice
const ResetPassword = memo(({urls}) => {
    const {t} = useTranslation();
    const { setData, post, errors} = useForm({
        email: getQueryParam('email'),
        token: getQueryParam('token'),
        password: '',
        password_confirmation: ''
    });

    function getQueryParam(key) {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(key);
    }

    function handleChange(ev) {
        const key = ev.target.id;
        let value = ev.target.value;

        setData(key, value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        post(urls['password.reset.submit']);
    }

    return (
        <div className="page page-auth page-reset-password">
            <div className="logo">
                <img src={logo} alt="SmartBudget logo" />
            </div>
            <div className="card w-100 border-0 shadow">
                <div className="card-body">
                    <h3 className="text-center fw-bold mt-2 mb-5">{t('titles.Reset password')}</h3>
                    <form className="mb-3" method="post" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" id="password" className={`form-control${errors.password ? ' is-invalid' : ''}`} placeholder={t('labels.new_password')} aria-label={t('labels.new_password')} aria-describedby="password" onChange={handleChange} />
                            {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" id="password_confirmation" className="form-control" placeholder={t('labels.new_password_confirm')} aria-label={t('labels.new_password_confirm')} aria-describedby="password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-1">
                            <FontAwesomeIcon icon={faCheck} style={{ marginRight: '0.5rem'}} color="white" />
                            {t('phrases.Reset password')}
                        </button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <small>{t('phrases.Already have a password?')} <Link href={urls['login']}>{t('phrases.Sign in', { person: '2nd' })}</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
});

ResetPassword.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bsColClass} />
};

export default ResetPassword;
