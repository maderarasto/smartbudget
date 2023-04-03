import {useRef, useEffect} from 'react';
import {Tooltip as BSTooltip} from 'bootstrap';

export default function Tooltip({children, text}) {
    const tooltipRef = useRef(null);

    useEffect(() => {
        new BSTooltip(tooltipRef.current);
    }, [])

    return (
        <span ref={tooltipRef} className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip" data-bs-title={text}>
            {children}
        </span>
    )
}
