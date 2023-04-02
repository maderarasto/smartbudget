import {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

import ContextMenu from "./ContextMenu";

export default function UserPanel({user}) {
    const contextMenuRef = useRef(null);

    const settingActions = [
        { action: 'edit-profile', label: 'Edit profile', disabled: true },
        { action: 'logout', label: 'Logout' }
    ];

    function  handleSettingActions(action) {
        if (action === 'edit-profile') {
            console.log('Handling action for editing profile...');
        } else if (action === 'logout') {
            location.href = 'auth/logout';
        }

        contextMenuRef.current.close();
    }

    function handleSettingsClick()  {
        contextMenuRef.current.open();
    }

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
                <div className="position-relative">
                    <ContextMenu ref={contextMenuRef}>
                        {
                            settingActions.map(({action, label, disabled}) => (
                                <ContextMenu.Item
                                    key={action}
                                    label={label}
                                    disabled={disabled}
                                    onClick={ev => handleSettingActions(action, ev)} />
                            ))
                        }
                    </ContextMenu>
                    <FontAwesomeIcon icon={faCog} size="lg" onClick={handleSettingsClick} />
                </div>
            </div>
        </div>
    )
}

/**
 * const menuItems = [
 *     { action: 'edit-profile', label: 'Upravit profil' },
 *     { action: 'logout', label: 'Odhlasit' },
 * ]
 *
 * <ContextMenu actions={menuItems} />
 *
 * <ContextMenu>
 *     <MenuItem icon={faPlus} action="edit-profile" label="Upravit profil" onClick={handleContextClick} />
 * </ContextMenu>
 *
 * <ContextMenu>
 *     <MenuItem>
 *         <FontAwesomeIcon icon={faPlus} />
 *         <span>Upravit profil />
 *     </MenuItem>
 * </ContextMenu>
 */
