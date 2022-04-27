import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFoldLine } from 'react-icons/ri';
import { IoIosNotifications } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';

import Notification from '../Notification/Notification';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import './Header.scss';

interface HeaderProps {
    state: boolean;
    stateToggler: () => void
}

const Header: FC<HeaderProps> = ({ state, stateToggler }) => {

    const [notification, setNotification] = useState<boolean>(false);

    const mobile = useMediaQuery('(max-width: 767px)');

    const modalsToggler = () => {
        setNotification(!notification)
    }

    return (
        <header className={mobile 
            ? state ? 'header header_mobile' : 'header' 
            : 'header'}>
            <RiMenuFoldLine 
                onClick={() => stateToggler()}
                className={state ? 'header__toggler' : 'header__toggler  header__toggler_active'}
            />
            <div className='header__actions'>
                <Link to='/account'>
                    <IoPersonCircleSharp className='header__toggler'/>
                </Link>
                <IoIosNotifications 
                    className='header__toggler'
                    onClick={modalsToggler}
                />
            </div>
            <Notification notification={notification}/>
        </header>
    )
}

export default Header;