import {isLoading} from '../actions/utils';
import {getAllHeroesSuccess} from '../actions/api';


const DOTA_API = 'https://api.opendota.com/api/';


export function getAllHeroes() {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch(DOTA_API + 'heroes', {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/vnd.api+json'
            },
        })
            .then(response => {
                response.json()
                    .then(function (array) {
                        dispatch(getAllHeroesSuccess(array));
                        dispatch(isLoading(false));
                    });
            })
    };
}



