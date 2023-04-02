import {useState, useEffect, useRef} from 'react';

export function useComponentVisible(initialValue) {
    const [componentVisible, setComponentVisible] = useState(initialValue);
    const componentRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside,  true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, []);

    function handleClickOutside(ev) {
        if (componentRef.current && !componentRef.current.contains(ev.target)) {
            setComponentVisible(false);
        }
    }

    return {
        componentRef,
        componentVisible,
        setComponentVisible
    };
}
