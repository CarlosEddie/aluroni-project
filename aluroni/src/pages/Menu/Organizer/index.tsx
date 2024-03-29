import React, { memo, useState } from 'react';
import styles from './Organizer.module.scss';
import options from './options.json';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    organizer: string,
    setOrganizer: React.Dispatch<React.SetStateAction<string>>,
}

function Organizer({organizer, setOrganizer}: Props) {
    const [open, setOpen] = useState(false);
    const organizerName = organizer && options.find(option => option.value === organizer)?.name;

    return (
        <button className={classNames({
            [styles.organizer]: true,
            [styles['organizer--active']]: organizer !== '',
        })} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)}>
            <span>{organizerName || 'Order by'}</span>
            {/*<MdKeyboardArrowUp size={20} style={{transform: `rotate(${open ? 0 : 180}deg)`}}/>*/}
            {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.organizer__options]: true,
                [styles['organizer__options--active']]: open,
            })}>
                {options.map(option => (
                    <div className={styles.organizer__option} key={option.value} onClick={() => setOrganizer(option.value)}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    );
}

export default memo(Organizer);