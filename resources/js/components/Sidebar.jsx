import {useState, useEffect} from 'react';

import MenuSheetItem from './MenuSheetItem';
import logo from "../../img/smartbudget_logo.png";

export default function Sidebar() {
    const [budgetSheets, setBudgetSheets] = useState([]);

    useEffect(() => {
        setBudgetSheets([
            { name: 'September 2023', active: true },
            { name: 'August 2023', active: false },
            { name: 'July 2023', active: false },
            { name: 'June 2023', active: false },
        ])
    }, []);

    function handleSheetItemClick(sheetIndex) {
        const newState = budgetSheets.map(({name, active}, index) => {
           const sheetItem = { name, active: false };

           if (index === sheetIndex) {
               sheetItem.active = true;
           }

           return sheetItem;
        });

        setBudgetSheets(newState);
    }

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="SmartBudget logo" />
            </div>
            <div className="sidebar__sheets">
                <small className="fw-bold text-uppercase text-secondary">Your budget sheets</small>
                <div className="sheets-list">
                    {budgetSheets.map(({name, active}, index) => (
                        <MenuSheetItem
                            key={index}
                            name={name}
                            active={active} onClick={() => handleSheetItemClick(index)} />
                    ))}
                </div>
            </div>
            <div className="sidebar__overview">
                <small className="fw-bold text-uppercase text-secondary">Monthly overview</small>
            </div>
            <div className="sidebar__user"></div>
        </div>
    )
}
