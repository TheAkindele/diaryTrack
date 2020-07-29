import { CREATE_POST, CREATE_POST_ERR, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, DELETE_POST } from '../actions/actionConstants'

const initPostState = {
    posts: [],
    loading: false,
    error: null,
    post: [],

}

const postReducer = (state = initPostState, action) => {
    switch (action.type) {
        case CREATE_POST:
            //console.log('created project= ', action.payload)
            return state

        case CREATE_POST_ERR:
            //console.log('error message ', action.payload)
            return state

        case GET_POST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_POST_SUCCESS:
            return ({
                ...state,
                post: action.payload
            })

        case GET_POST_FAILURE:
            return {
                ...state,
                error: true
            }

        case DELETE_POST:
            //console.log('post deleted ')
            return state

        default:
            return state
    }
}

export default postReducer

