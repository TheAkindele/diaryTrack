import { CREATE_POST, CREATE_POST_ERR } from './actionConstants'

export const createPostAction = newPost => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore()
        //const firebase = getFirebase()
        const id = getState().firebase.auth.uid
        const profile = getState().firebase.profile
        console.log('the profile ', profile)

        firestore.collection('events').add({
            ...newPost,
            authorId: id,
            createdAt: new Date(),
            firstname: '',
            lastname: '',
        })
            .then(() => {
                dispatch({ type: CREATE_POST, payload: newPost })
            })
            .catch(err => {
                dispatch({ type: CREATE_POST_ERR, payload: err })
            })
    }
}

export const postDeleteAction = id => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        ///const id = getState().firebase.auth.uid
        firestore.collection('events').doc(id).delete()
            .then(() => {
                // console.log('document delete successful')
            })
            .catch((error) => {
                //console.error("Error deleting document ", error);
            })
    }
}

