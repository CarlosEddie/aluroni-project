import DefaultPage from 'Components/DefaultPage';
import PageMenu from 'Components/PageMenu';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <PageMenu />
                <Routes>
                    <Route path='/' element={<DefaultPage />}>
                        <Route index element={<Home />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='about' element={<About />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}