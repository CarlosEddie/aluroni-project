import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg'
import SearchEngine from './SearchEngine';
import { useState } from 'react';

export default function Menu() {
    
    const [search, setSearch] = useState('');
    
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    The code and pasta house
                </div>
            </header>
            <section className={styles.menuCard}>
                <h3 className={styles.menuCard__title}>
                    Menu
                </h3>
                <SearchEngine search={search} setSearch={setSearch}/>
            </section>
        </main>
    )
}