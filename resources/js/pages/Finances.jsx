import React from 'react';

import Layout from "./Layouts/Layout";

export default function Finances() {
    return (
        <div className="page page__finances">
            <h1>Finances App</h1>
        </div>
    );
}

Finances.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bs_col_class} />
};
