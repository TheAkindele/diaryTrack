import { combineReducers } from 'redux'
import postReducer from './postReducer'
import authReducer from './authReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    postState: postReducer,
    authState: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer