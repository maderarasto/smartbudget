import React from 'react'
import { useForm, Link } from '@inertiajs/react';
import { useTranslation} from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faCheck} from '@fortawesome/free-solid-svg-icons'

import Layout from "./Layouts/Layout";
import logo from "../../img/smartbudget_logo.png";

export default function RecoverPassword({urls}) {
    const {t} = useTranslation();
    const { setData, post, errors} = useForm({
        email: ''
    });

    function handleChange(ev) {
        const key = ev.target.id;
        let value = ev.target.value;

        setData(key, value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();

        post(urls['password.recover.submit']);
    }

    return (
        <div className="page page-auth page-recover-password">
            <div className="logo">
                <img src={logo} alt="SmartBudget logo" />
            </div>
            <div className="card w-100 border-0 shadow">
                <div className="card-body">
                    <h3 className="text-center fw-bold mt-2 mb-5">{t('titles.Recover password')}</h3>
                    <form className="mb-3" method="post" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="email">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input type="text" id="email" className={`form-control${errors.email ? ' is-invalid' : ''}`} placeholder={t('labels.email')} aria-label={t('labels.email')} aria-describedby="email" onChange={handleChange} />
                            {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-1">
                            <FontAwesomeIcon icon={faCheck} style={{marginRight: '0.5rem'}} color="white" />
                            {t('phrases.Send email')}
                        </button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <small><Link href={urls['login']}>← {t('phrases.Return to back')}</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}

RecoverPassword.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bsColClass} />
};

