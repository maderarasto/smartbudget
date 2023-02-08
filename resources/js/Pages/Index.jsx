import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index() {
    return (
        <div className="page page__index">
            <div className="d-flex flex-column align-items-center">
                <h1 className="title"><span className="text-primary">Smart</span>Budget</h1>
                <span className="subtitle">Manage your budget</span>
                <Link href="/finances" as="button" type="button" className="btn btn-primary btn-sm w-75 mt-4">
                    Open app
                </Link>
            </div>
        </div>
    );
}