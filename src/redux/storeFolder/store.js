import React from 'react'
import App from '../../App'
import { connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
//import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import firebase from '../../firebaseFolder/firebase'
import { getFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore'

const middlewares = [thunk.withExtraArgument(
    { getFirebase, getFirestore })]  //logger

const store = createStore(rootReducer,
    compose(
        applyMiddleware(...middlewares),
        reduxFirestore(firebase)
    )
)

const rrfConfig = {
    useFirestoreForProfile: true,
    userProfile: "users ",
    attachAuthIsReady: true
};

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

///1a. To wait till auth load before showing the homepage, we say
//1b. first mapStateToProps
const mapStateToProps = (state) => ({
    authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded,
});

//1c. Then we make a waitTillAuth function
export const WaitTillAuth = connect(mapStateToProps)(({ authIsLoaded }) => {
    if (!authIsLoaded) return <div className='load'>Loading...</div>;
    return (
        <App />
    );
});

export default store
