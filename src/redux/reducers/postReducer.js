import { CREATE_POST, CREATE_POST_ERR, GET_POST } from '../actions/actionConstants'

const initPostState = {
    posts: [],
    post: ''
}

const postReducer = (state = initPostState, action) => {
    switch (action.type) {
        case (CREATE_POST):
            console.log('created project= ', action.payload)
            return state

        case CREATE_POST_ERR:
            console.log('error message ', action.payload)
            return state

        case (GET_POST):
            return ({
                ...state,
                post: action.payload
            })

        default:
            return state
    }
}

export default postReducer

