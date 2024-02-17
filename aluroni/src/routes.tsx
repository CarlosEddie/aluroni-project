import DefaultPage from 'components/DefaultPage';
import Footer from 'components/Footer';
import PageMenu from 'components/PageMenu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Menu = lazy(() => import('pages/Menu'));
const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const NotFound = lazy(() => import('pages/NotFound'));
const Dish = lazy(() => import('pages/Dish'));

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <PageMenu />
                <Suspense fallback={<p> Loading... </p>}>
                    <Routes>
                        <Route path='/' element={<DefaultPage />}>
                            <Route index element={<Home />} />
                            <Route path='menu' element={<Menu />} />
                            <Route path='about' element={<About />} />
                        </Route>
                        <Route path='dish/:id' element={<Dish />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </main>
    );
}