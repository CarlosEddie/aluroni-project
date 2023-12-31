import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './PageMenu.module.scss';
import { Link } from 'react-router-dom';

export default function PageMenu() {
    const routes = [{
        label: 'Home',
        to: '/'
    }, {
        label: 'Menu',
        to: '/menu'
    }, {
        label: 'About',
        to: '/about'
    }];
    return (
        <nav className={styles.pageMenu}>
            <Logo />
            <ul className={styles.pageMenu__list}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.pageMenu__link}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}