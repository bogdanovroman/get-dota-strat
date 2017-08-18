const INITIAL_STATE = {
    heroes: []
}

export function data(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_ALL_HEROES_SUCCESS':
            return {...state, heroes: action.array}
        default:
            return state;
    }
}
