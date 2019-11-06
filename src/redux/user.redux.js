const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const LOGOUT = 'LOGOUT'


const initState = {
    isLogin: false,
    token: ''
}

//-------------reducer--------------

export function user(state=initState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                token: action.payload.token
            }

        case LOGOUT:
            return {
                isLogin: false,
                token: '',
            }

        default:
            return state
    }
}


// --------------------action-----------------

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}



export function logout() {
    return {
        type: LOGOUT
    }
}
