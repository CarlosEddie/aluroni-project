import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    The code and pasta house
                </div>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    );
}