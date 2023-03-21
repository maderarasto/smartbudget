import React from 'react';
import { Link } from '@inertiajs/react';

import Layout from './Layouts/Layout';

function Index() {
    return (
        <div className="page page-index">
            <h1 className="title"><span className="text-primary">Smart</span>Budget</h1>
            <span className="subtitle">Manage your budget</span>
            <div className="buttons">
                <Link href="/finances" as="button" type="button" className="btn btn-primary btn-sm mt-4">
                    Open app
                </Link>
            </div>
        </div>
    );
}

Index.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bs_col_class} />
};
export default Index;
