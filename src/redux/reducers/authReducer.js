import { LOGIN_SUCCESS, LOGIN_ERROR, SIGN_OUT } from '../actions/actionConstants'

const authInitialState = {
    user: '',
    authError: null
}

const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('Login successful')
            return ({
                ...state,
                authError: null
            })

        case LOGIN_ERROR:
            console.log('login error ', action.payload)
            return ({
                ...state,
                authError: 'Login Input Error'
            })

        case SIGN_OUT:
            console.log('signout success')
            return state

        default:
            return state
    }
}

export default authReducer