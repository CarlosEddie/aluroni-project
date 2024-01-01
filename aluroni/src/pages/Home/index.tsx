import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHouse from 'assets/our_house.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'Types/Dish';

export default function Home() {

    let recommendedDishes = [...menu];

    recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);
    
    const navigate = useNavigate();

    function redirectToDetails(dish: Dish) {
        navigate(`/dish/${dish.id}`, { state: { dish }, replace:true});
    }

    return (
        <section>
            <h3 className={stylesTheme.title}>
                Kitchen recommendations
            </h3>
            <div className={styles.recommended2}>
                {recommendedDishes.map(item => (
                    <div key={item.id} className={styles.recommended1}>
                        <div className={styles.recommended1__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recommended1__button} onClick={() => redirectToDetails(item)}>
                            See more
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}> Our House </h3>
            <div className={styles.ourHouse}>
                <img src={ourHouse} alt="Aluroni's House" />
                <div className={styles.ourHouse__address}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}