import DefaultPage from 'Components/DefaultPage';
import Footer from 'Components/Footer';
import PageMenu from 'Components/PageMenu';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <PageMenu />
                <Routes>
                    <Route path='/' element={<DefaultPage />}>
                        <Route index element={<Home />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='about' element={<About />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}