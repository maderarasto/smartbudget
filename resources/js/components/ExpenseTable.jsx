import React, {useRef, createRef, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faMagnifyingGlass, faPlus, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

export default function ExpenseTable({columns, data, pagination, total}) {
    const {t} = useTranslation();
    const checkboxRefs = useRef([]);

    // useEffect(() => {
    //     checkboxRefs.current = Array(data.length)
    //         .fill(0)
    //         .map((_, index) => checkboxRefs.current[index] || createRef());
    // }, []);

    function getTableCellValue(expenseItem, columnKey) {
        let value = expenseItem[columnKey];

        if (columnKey === 'category') {
            value = <span className="badge bg-warning">{value}</span>;
        } else if (columnKey === 'price') {
            value += ` ${expenseItem.currency}`;
        }

        return value;
    }

    function renderTableHeader({key, label, style}) {
        const element = key !== 'id' ? 'span' : 'input';
        const child = element === 'span' ? React.createElement(element, {}, label) :
            React.createElement(element, {
                type: 'checkbox',
                className: 'form-check-input',
                onChange: function (ev) {
                    const checkedCount = checkboxRefs.current.reduce(
                        (total, checkboxEl) => total + (checkboxEl.checked ? 1 : 0), 0);

                    checkboxRefs.current.forEach(checkboxEl => {
                        checkboxEl.checked = checkedCount >= checkboxRefs.current.length ? !checkboxEl.checked : true;
                    });

                    if (checkedCount < checkboxRefs.current.length) {
                        ev.target.checked = true;
                    }
                }
            });

        return React.createElement('th', {
            key: key,
            style: style
        }, child);
    }

    function renderTableCell(index, expenseItem, {key: columnKey, style: columnStyle}) {
        const element = columnKey === 'id' ? 'th' : 'td';
        const childStyle = {...columnStyle};
        const child = columnKey !== 'id' ? getTableCellValue(expenseItem, columnKey) : React.createElement('input', {
            type: 'checkbox',
            className: 'form-check-input',
            ref: (el) => checkboxRefs.current.push(el)
        });

        if (columnKey !== 'id' && !isNaN(expenseItem[columnKey])) {
            childStyle.textAlign = 'right';
        }

        return React.createElement(element, {
            key: columnKey,
            style: childStyle
        }, child);
    }

    return (
        <div className="expense-table">
            <div className="expense-table__toolbar">
                <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>{t('phrases.Add new expense')}</span>
                </button>

                <form>
                    <div className="input-with-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" className="form-control" placeholder={t('phrases.Search')} />
                    </div>
                </form>
            </div>
            <div className="expense-table__table">
                {
                    data.length === 0 ? (
                        <div className="table-default-message">
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <h3>No expenses yet</h3>
                        </div>
                    ) : ''
                }
                <table className="table">
                    <thead>
                        <tr>{columns.map(column => renderTableHeader(column))}</tr>
                    </thead>
                    <tbody>
                    {
                        data.map((expenseItem, index) => (
                            <tr key={expenseItem.id}>
                                {
                                    columns.map(column => renderTableCell(index, expenseItem, column))
                                }
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="expense-table__footer">
                <div className="table-paginator">
                    <button className="btn btn-primary btn-sm">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <div className="table-paginator__page btn btn-sm">
                        1 {t('phrases.of')} 10
                    </div>
                    <button className="btn btn-primary btn-sm">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
