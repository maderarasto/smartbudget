import {useState, useEffect} from 'react';
import {faBasketShopping, faHouse, faSoap} from '@fortawesome/free-solid-svg-icons';

import MenuSheetItem from './MenuSheetItem';
import MenuOverviewItem from './MenuOverviewItem';
import UserPanel from './UserPanel';

import logo from '../../img/smartbudget_logo.png';

export default function Sidebar() {
    const [budgetSheets, setBudgetSheets] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setBudgetSheets([
            { name: 'September 2023', active: true },
            { name: 'August 2023', active: false },
            { name: 'July 2023', active: false },
            { name: 'June 2023', active: false },
        ]);

        setUser({
            name: 'Rastislav',
            email: 'maderarasto@gmail.com'
        });
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
            <div className="sidebar__section sheets">
                <small className="title">Your budget sheets</small>
                <div className="sheets-list">
                    {budgetSheets.map(({name, active}, index) => (
                        <MenuSheetItem
                            key={index}
                            name={name}
                            active={active} onClick={() => handleSheetItemClick(index)} />
                    ))}
                </div>
            </div>
            <div className="sidebar__section overview">
                <small className="title">Monthly overview</small>
                <div className="overview-list">
                    <MenuOverviewItem name="Groceries" icon={faBasketShopping} budget={150} sum={123.5} currency="EUR" />
                    <MenuOverviewItem name="Household" icon={faHouse} budget={50} sum={11.2} currency="EUR" />
                    <MenuOverviewItem name="Hygiene" icon={faSoap} budget={50} sum={33.9} currency="EUR" />
                </div>
            </div>
            <div className="sidebar__user">
                <UserPanel user={user} />
            </div>
        </div>
    )
}
