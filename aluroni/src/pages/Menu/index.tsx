import styles from './Menu.module.scss';
import SearchEngine from './SearchEngine';
import { useState } from 'react';
import Filters from './Filters';
import Organizer from './Organizer';
import Items from './Items';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu() {
    
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [organizer, setOrganizer] = useState('');
    
    return (
        <section className={styles.menuCard}>
            <h3 className={stylesTheme.title}>
                Menu
            </h3>
            <SearchEngine search={search} setSearch={setSearch}/>
            <div className={styles.menuCard__filters}>
                <Filters filter={filter} setFilter={setFilter}/>
                <Organizer organizer={organizer} setOrganizer={setOrganizer} />
            </div>
            <Items search={search} filter={filter} organizer={organizer} />
        </section>
    );
}