import styles from './Item.module.scss';
import TagsDish from 'Components/TagsDish';
import { Dish } from 'Types/Dish';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Dish) {
    const { id, title, description, photo } = props;
    const navigate = useNavigate();
    return (
        <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
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