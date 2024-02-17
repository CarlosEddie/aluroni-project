import styles from './Dish.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import menu from 'data/menu.json';
import { lazy } from 'react';

const TagsDish = lazy(() => import('components/TagsDish'));
const NotFound = lazy(() => import('pages/NotFound'));
const DefaultPage = lazy(() => import('components/DefaultPage'));

export default function Dish() {

    const { id } = useParams();
    const navigate = useNavigate();
    const dish = menu.find(item => item.id === Number(id));
    if(!dish) {
        return <NotFound />;
    }
    return(
        <Routes>
            <Route path='*' element={ <DefaultPage /> }>
                <Route index element={
                    <>
                        <button className={styles.goBack} onClick={() => navigate(-1)}>
                            {'< Back'}
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.title}>
                                {dish.title}
                            </h1>
                            <div className={styles.image}>
                                <img src={dish.photo} alt={dish.title} />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.content__description}>
                                    {dish.description}
                                </p>
                                <TagsDish {...dish} />
                            </div>
                        </section>
                    </>
                } ></Route>
            </Route>
        </Routes>
    );
}