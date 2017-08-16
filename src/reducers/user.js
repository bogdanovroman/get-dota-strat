const INITIAL_STATE = {
    isLogged: false,
    name : 'Рома',
    pic: {
        small: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p48x48/11220479_1445533895768183_7245429419801242504_n.jpg?oh=4954e7e35613f9912df845efd09af5e9&oe=59E329E0',
        large: ''
    }
}

export function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
