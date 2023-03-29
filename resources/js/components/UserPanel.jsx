import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

export default function UserPanel({user}) {
    return (
        <div className="user-panel">
            <div className="user-panel__photo">
                <span className="text-uppercase">{user?.name[0] ?? ''}</span>
            </div>
            <div className="user-panel__details">
                <div className="user-panel__details-name">{user?.name ?? ''}</div>
                <div className="user-panel__details-email">{user?.email ?? ''}</div>
            </div>
            <div className="user-panel__action">
                <FontAwesomeIcon icon={faCog} size="lg" />
            </div>
        </div>
    )
}
