import React, {memo, useRef} from 'react';

import Layout from './Layouts/Layout';
import Sidebar from '../components/Sidebar';
import ExpenseTable from '../components/ExpenseTable';
import {useTranslation} from "react-i18next";
import FormModal from "../components/FormModal";
import modal from "bootstrap/js/src/modal";

// Necessary to wrap a page component into memo function
// because InertiaJS making page components load twice
const Finances = memo(({user}) => {
    const {t} = useTranslation();
    const modalRef = useRef(null);

    const expensesList = {
        columns: [
            { key: 'id', label: '', style: { width: '50px', textAlign: 'center'} },
            { key: 'name', label: t('test.Name'), style: { width: '350px'} },
            { key: 'date', label: t('test.Date'), style: { width: '250px'}  },
            { key: 'quantity', label:t('test.Quantity'), style: { width: '75px'}  },
            { key: 'category', label: t('test.Category'), style: { width: '200px'}  },
            { key: 'price', label: t('test.Price'), style: { width: '150px'}  }
        ],
        data: Array.from(new Array(10)).map(() => ({
            id: Math.random() * 999 + 1,
            name: `${t('test.Eggs')} 6${t('test.pcs')}`,
            quantity: Math.floor(Math.random() * 9 + 1),
            category: t('test.Groceries'),
            price: Math.round((Math.random() * 9 + 1 + Number.EPSILON) * 100) / 100,
            currency: 'EUR'
        }))
    }

    return (
        <div className="page page-finances">
            <Sidebar user={user.data} />
            <div className="page-finances__content">
                <div className="content-title">
                    <small>{t('titles.Budget sheet')}</small>
                    <h1 style={{ alignSelf: 'flex-start'}}>September 2023</h1>
                </div>
                <ExpenseTable columns={expensesList.columns} data={expensesList.data} />
            </div>
            <FormModal ref={modalRef} />
        </div>
    );
});

Finances.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bsColClass} />
};

export default  Finances;
