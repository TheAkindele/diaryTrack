import React from 'react'
import { EventFooter, EventBody, Eventbox, DeleteButton } from './eventStyle'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { postDeleteAction } from '../../redux/actions/postActions'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment'

const Event = ({ selectedpost, userStatus, deleteEvent, match }) => {
    //console.log('selected ', selectedpost)
    const id = match.params.eventId
    //console.log('id= ', id)
    if (!userStatus.uid)
        return <Redirect to='/sign-in'></Redirect>

    if (selectedpost) {
        return (
            <Eventbox>
                <EventBody>
                    <h2 className="title">{selectedpost.title} {selectedpost.id}</h2>
                    <h6 className='summary'>Summary: <span>{selectedpost.summary}</span></h6>
                    <p className="content">{selectedpost.content}</p>
                </EventBody>
                <EventFooter>
                    <p className="date">{moment(selectedpost.createdAt.toDate()).calendar()}</p>
                </EventFooter>
                <DeleteButton onClick={() => {
                    deleteEvent(id)
                    if (deleteEvent(id))
                        return ' I don delete am'
                }}>
                    delete
                </DeleteButton>
            </Eventbox>
        )
    }
    else {
        return <Eventbox>Event Unavaiable</Eventbox>
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('event state= ', state)
    const id = ownProps.match.params.eventId
    //console.log('id= ', id)
    const allEvents = state.firestore.data.events
    const event = allEvents ? allEvents[id] : null
    //console.log('single event ', event)
    return {
        selectedpost: event,
        userStatus: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => ({
    deleteEvent: postId => dispatch(postDeleteAction(postId))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'events' }])
)(Event)
