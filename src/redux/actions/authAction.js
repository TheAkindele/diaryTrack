import { LOGIN_SUCCESS, LOGIN_ERROR, SIGN_OUT } from './actionConstants'

export const signInAction = credentials => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
            .then(() => {
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch(err => {
                dispatch({ type: LOGIN_ERROR, payload: err })
            })
    }
}

export const signOutAction = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: SIGN_OUT })
            })
    }
}