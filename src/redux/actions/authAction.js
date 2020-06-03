import { LOGIN_SUCCESS, LOGIN_ERROR, SIGN_OUT, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from './actionConstants'

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

export const signUpAction = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
            .then(response => {
                return firestore.collection('users').doc(response.user.uid).set({
                    firstName: newUser.firstname,
                    lastName: newUser.lastname,
                    initial: newUser.firstname[0] + newUser.lastname[0]
                })
            })
            .then(() => {
                dispatch({ type: SIGN_UP_SUCCESS })
            })
            .catch(err => {
                dispatch({ type: SIGN_UP_FAIL, payload: err })
            })
    }
}
