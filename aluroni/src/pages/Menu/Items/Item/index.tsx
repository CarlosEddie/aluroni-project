import styles from './Item.module.scss';
import TagsDish from 'Components/TagsDish';
import { Dish } from 'Types/Dish';

export default function Item(props: Dish) {
    const { title, description, photo } = props;
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt={title} />
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
                <TagsDish {...props} />
            </div>
        </div>
    );
}