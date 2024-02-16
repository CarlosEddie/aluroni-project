import React, { memo, useMemo } from 'react';
import styles from './SearchEngine.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}

function SearchEngine({ search, setSearch }: Props) {
    const element = useMemo(() => <CgSearch size={20} color="#4c4d5e" />, []);
    return (
        <div className={styles.searchEngine}>
            <input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search"/>
            {element}
        </div>
    );
}

export default memo(SearchEngine);