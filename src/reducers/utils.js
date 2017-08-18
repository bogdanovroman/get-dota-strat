const INITIAL_STATE = {
    isLoading: false
}

export function utils(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: action.bool
            }
        default:
            return state;
    }
}
