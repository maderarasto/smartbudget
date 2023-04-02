import {forwardRef, useEffect, useState, useImperativeHandle} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useComponentVisible} from "../hooks";

const ContextMenu = forwardRef(({direction='right', children}, ref) => {
    const {opened, setOpened} = useState(false);
    const {componentRef, componentVisible, setComponentVisible} = useComponentVisible(false);

    useImperativeHandle(ref, () => {
        return {
            isOpen: function () {
                return componentVisible;
            },

            open: function () {
                setComponentVisible(true);
            },

            close: function () {
                setComponentVisible(false);
            }
        }
    });

    function getClassName() {
        return `context-menu${componentVisible ? ' opened' : ''} shadow`;
    }

    function getStyle() {
        direction = ['left', 'right'].includes(direction) ? direction : 'right';
        const style = {
            top: 'auto',
            right: 'auto',
            bottom: '-20px',
            left: 'auto'
        };

        if (direction === 'left') {
            style.right = '25px';
        } else if (direction === 'right') {
            style.left = '25px';
        }

        return style;
    }

    function handleRef(node) {
        ref.current = node;
        componentRef.current = node;
    }

    return (
        componentVisible ? (
            <ul className={getClassName()} style={getStyle()} ref={handleRef}>
                {children}
            </ul>) : ''
    );
});

ContextMenu.Item = function ({faIcon, label, disabled, onClick}) {
    console.log(disabled)
    function getClassName() {
        return `context-menu__item${disabled ? ' disabled' : ''}`;
    }

    return (
        <li className={getClassName()} onClick={onClick}>
            {faIcon ? <FontAwesomeIcon icon={faIcon} /> : ''}
            <span>{label}</span>
        </li>
    );
}

export default ContextMenu;
