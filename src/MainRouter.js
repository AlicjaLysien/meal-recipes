import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import DetailMeal from './components/DetailMeal.js';
import ListRandom from './components/ListRandom.js'

function MainRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ListRandom />} />
                <Route exact path="/details/:id"  element={<DetailMeal />} />
            </Routes>
        </BrowserRouter>
    );
}


export default MainRouter;