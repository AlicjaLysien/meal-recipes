import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries.js';
import DetailMeal from './components/DetailMeal.js';
import ListRandom from './components/ListRandom.js'

function MainRouter() {

    return (
        <Routes>
            <Route index path="" element={<ListRandom />} />
            <Route exact path="/details/:id"  element={<DetailMeal />} />
            <Route exact path="/countries"  element={<Countries />} />
        </Routes>
    );
}


export default MainRouter;