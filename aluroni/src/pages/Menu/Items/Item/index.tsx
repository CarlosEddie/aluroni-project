import logo from 'assets/logo.svg';
import styles from './Item.module.scss';

export default function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={logo} alt="image" />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>
                        Pasta
                    </h2>
                    <p>
                        pasta description
                    </p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>
                        Pasta
                    </div>
                    <div className={styles.item__portion}>
                        400g
                    </div>
                    <div className={styles.item__qtypeople}>
                        serves 2 people
                    </div>
                    <div className={styles.item__value}>
                        R$ 50
                    </div>
                </div>
            </div>
        </div>
    )
}