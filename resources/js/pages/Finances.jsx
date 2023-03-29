import React from 'react';

import Layout from './Layouts/Layout';
import Sidebar from '../components/Sidebar';

export default function Finances() {
    return (
        <div className="page page-finances">
            <Sidebar />
            <div className="page-finances__content">

            </div>
        </div>
    );
}

Finances.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bsColClass} />
};
