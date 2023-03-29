import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-regular-svg-icons';

export default function MenuSheetItem({name, active, onClick}) {
    function getClassName() {
        return `sheets-list__item${active ? ' active' : ''}`;
    }

    return (
        <div className={getClassName()} onClick={onClick}>
            <FontAwesomeIcon icon={faFileLines} />
            <span>{name}</span>
        </div>
    )
}
