import classNames from 'classnames';
import styles from './TagsDish.module.scss';
import { Dish } from 'Types/Dish';

export default function TagsDish({category, size, serving, price}: Dish) {
    return (
        <div className={styles.tags}>
            <div className={classNames(
                styles.tags__type,
                styles[`tags__type__${category.label.toLowerCase()}`],
            )}>
                { category.label }
            </div>
            <div className={styles.tags__portion}>
                { size }g
            </div>
            <div className={styles.tags__qtypeople}>
                Serves { serving } {serving === 1 ? ' person' : ' people'}
            </div>
            <div className={styles.tags__value}>
                ${ price.toFixed(2) }
            </div>
        </div>
    );
}