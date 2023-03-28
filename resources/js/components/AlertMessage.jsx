import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function AlertMessage({type, title, text}) {
    const types = new Map([
        ['success', { className: 'alert-success', icon: faCheckCircle }],
        ['warning', { className: 'alert-warning', icon: faExclamationCircle }],
        ['danger', { className: 'alert-danger', icon: faTimesCircle }]
    ]);

    function getIcon() {
        return types.has(type) ? types.get(type).icon : '';
    }

    function getClassName() {
        return `alert-message alert${types.has(type) ? ' ' + types.get(type).className : ''}`
    }

    return (
        <div className={getClassName()}>
            <FontAwesomeIcon icon={getIcon()} size="lg" />
            <div>
                <div className="fw-bold">{title}</div>
                <div>{text}</div>
            </div>
        </div>
    );
}
