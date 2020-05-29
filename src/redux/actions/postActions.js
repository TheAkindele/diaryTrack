import { CREATE_POST, GET_POST, CREATE_POST_ERR } from './actionConstants'

export const createPostAction = newPost => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('events').add({
            ...newPost,
            fullname: 'Alaye wale',
            authorId: 123,
            createdAt: new Date()
        })
            .then(() => {
                dispatch({ type: CREATE_POST, payload: newPost })
            })
            .catch(err => {
                dispatch({ type: CREATE_POST_ERR, payload: err })
            })
    }
}

export const getPostAction = post => ({
    type: GET_POST,
    payload: post
})

