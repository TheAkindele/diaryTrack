import { LOGIN_SUCCESS, LOGIN_ERROR, SIGN_OUT, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from '../actions/actionConstants'

const authInitialState = {
    authError: null
}

const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            //console.log('Login successful')
            return ({
                ...state,
                authError: null
            })

        case LOGIN_ERROR:
            //console.log('login error ', action.payload)
            return ({
                ...state,
                authError: 'Login Input Error'
            })

        case SIGN_OUT:
            //console.log('signout success')
            return state

        case SIGN_UP_SUCCESS:
            //console.log('sign up success')
            return {
                ...state,
                authError: null
            }

        case SIGN_UP_FAIL:
            //console.log('sign up error')
            return {
                ...state,
                authError: action.payload
            }

        default:
            return state
    }
}

export default authReducer