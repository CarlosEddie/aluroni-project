import logo from 'assets/logo.svg';
import styles from './Item.module.scss';
import menu from '../items.json'

type Props = typeof menu[0];

export default function Item(props: Props) {
    const { title, description, category, size, serving, price } = props;
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={logo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>
                        { title }
                    </h2>
                    <p>
                        { description }
                    </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>
                        { category.label }
                    </div>
                    <div className={styles.item__portion}>
                        { size }g
                    </div>
                    <div className={styles.item__qtypeople}>
                        Serves { serving } {serving === 1 ? ' person' : ' people'}
                    </div>
                    <div className={styles.item__value}>
                        ${ price.toFixed(2) }
                    </div>
                </div>
            </div>
        </div>
    )
}