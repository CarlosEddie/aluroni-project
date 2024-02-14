import styles from './Item.module.scss';
import TagsDish from 'Components/TagsDish';
import { Dish } from 'Types/Dish';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

function Item(props: Dish) {
    const { id, title, description, photo } = props;
    console.log(title);
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

export default memo(Item);