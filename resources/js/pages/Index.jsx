import React, {memo} from 'react';
import { Link } from '@inertiajs/react';
import {useTranslation} from "react-i18next";

import Layout from './Layouts/Layout';
import logo from '../../img/smartbudget_logo.png';

// Necessary to wrap a page component into memo function
// because InertiaJS making page components load twice
const Index = memo(() => {
    const {t} = useTranslation();

    return (
        <div className="page page-index">
            <img src={logo} alt="SmartBudget logo" />
            <div className="buttons">
                <Link href="/finances" as="button" type="button" className="btn btn-primary btn-sm mt-4">
                    {t('phrases.Open app')}
                </Link>
            </div>
        </div>
    );
});

Index.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bsColClass} />
};

export default Index;
