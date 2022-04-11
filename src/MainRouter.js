import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries.js';
import DetailMeal from './components/DetailMeal.js';
import ListCountry from './components/ListCountry.js'
import ListRandom from './components/ListRandom.js'
import Search from './components/Search.js';

function MainRouter() {

    return (
        <Routes>
            <Route index path="" element={<ListRandom />} />
            <Route exact path="/details/:id"  element={<DetailMeal />} />
            <Route exact path="/countries"  element={<Countries />} />
            <Route exact path="/countries/:id"  element={<ListCountry />} />
            <Route exact path="/search"  element={<Search />} />
        </Routes>
    );
}


export default MainRouter;