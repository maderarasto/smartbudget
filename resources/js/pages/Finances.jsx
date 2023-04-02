import React, {memo} from 'react';

import Layout from './Layouts/Layout';
import Sidebar from '../components/Sidebar';
import ExpenseTable from '../components/ExpenseTable';

// Necessary to wrap a page component into memo function
// because InertiaJS making page components load twice
const Finances = memo(({user}) => {
    const expensesList = {
        columns: [
            { key: 'id', label: '', style: { width: '50px', textAlign: 'center'} },
            { key: 'name', label: 'Name', style: { width: '350px'} },
            { key: 'date', label: 'Date', style: { width: '250px'}  },
            { key: 'quantity', label: 'Quantity', style: { width: '150px'}  },
            { key: 'category', label: 'Category', style: { width: '200px'}  },
            { key: 'price', label: 'Price', style: { width: '150px'}  }
        ],
        data: [
            {
                id: 1,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 2,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 3,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 4,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 5,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 6,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 7,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 8,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 9,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            },
            {
                id: 10,
                name: 'Eggs 6pcs',
                quantity: 1,
                category: 'groceries',
                price: '2.99',
                currency: 'EUR'
            }
        ]
    }

    return (
        <div className="page page-finances">
            <Sidebar user={user.data} />
            <div className="page-finances__content">
                <div className="content-title">
                    <small>Budget sheet</small>
                    <h1 style={{ alignSelf: 'flex-start'}}>September 2023</h1>
                </div>
                <ExpenseTable columns={expensesList.columns} data={expensesList.data} />
            </div>
        </div>
    );
});

Finances.layout = (page) => {
    return <Layout children={page} title={page.props.title} bsColClass={page.props.bsColClass} />
};

export default  Finances;
