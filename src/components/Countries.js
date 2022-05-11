import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Flag from './styled/Flag/Flag';

import american from './../images/flags/american.png'
import british from './../images/flags/british.png'
import canadian from './../images/flags/canadian.png'
import chinese from './../images/flags/chinese.png'
import croatian from './../images/flags/croatian.png'
import dutch from './../images/flags/dutch.png'
import egyptian from './../images/flags/egyptian.png'
import french from './../images/flags/french.png'
import greek from './../images/flags/greek.png'
import indian from './../images/flags/indian.png'
import irish from './../images/flags/irish.png'
import italian from './../images/flags/italian.png'
import jamaican from './../images/flags/jamaican.png'
import japanese from './../images/flags/japanese.png'
import kenyan from './../images/flags/kenyan.png'
import malaysian from './../images/flags/malaysian.png'
import mexican from './../images/flags/mexican.png'
import moroccan from './../images/flags/moroccan.png'
import polish from './../images/flags/polish.png'
import portuguese from './../images/flags/portuguese.png'
import russian from './../images/flags/russian.png'
import spanish from './../images/flags/spanish.png'
import thai from './../images/flags/thai.png'
import tunisian from './../images/flags/tunisian.png'
import turkish from './../images/flags/turkish.png'
import vietnamese from './../images/flags/vietnamese.png'

function countriesImages(country) {
    switch (country) {
        case "American":
            return american;
        case "British":
            return british;
        case "Canadian":
            return canadian;
        case "Croatian":
            return croatian;
        case "Dutch":
            return dutch;
        case "Egyptian":
            return egyptian;
        case "French":
            return french;
        case "Greek":
            return greek;
        case "Chinese":
            return chinese;
        case "Indian":
            return indian;
        case "Irish":
            return irish;
        case "Italian":
            return italian;
        case "Jamaican":
            return jamaican;
        case "Japanese":
            return japanese;
        case "Kenyan":
            return kenyan;
        case "Malaysian":
            return malaysian;
        case "Mexican":
            return mexican;
        case "Moroccan":
            return moroccan;
        case "Polish":
            return polish;
        case "Portuguese":
            return portuguese;
        case "Russian":
            return russian;
        case "Spanish":
            return spanish;
        case "Thai":
            return thai;
        case "Tunisian":
            return tunisian;
        case "Turkish":
            return turkish;
        case "Vietnamese":
            return vietnamese;
        default:
            return british;
    }
}

function Countries() {
    const [flags, setFlags] = useState([
        american => american
    ]);
    const [countries, setCountries] = useState();

    useEffect(() => {
        myAxios()
    }, []);

    const myAxios = () => {

        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        })
            .then(function (response) {
                var countryList = []
                response.data.meals.map((item) => {
                    return countryList.push(item.strArea);
                });
                setCountries(countryList)
            });
    }
    return (
        <>
            <h2>Food by country</h2>
                {countries && countries.map((item) => {
                    return <Flag key={item} className="flag" margin="20">
                        <NavLink to={`/countries/${item.toLowerCase()}`}>
                            <img src={countriesImages(item)} 
                                alt={item} 
                                title={item}
                                height="100px" />
                        </NavLink>
                    </Flag>
                })
                }  
        </>
    );
}


export default Countries;