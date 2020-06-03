import React from 'react'
import { SummaryStyle, EventSummaryStyle, SummaryTitleStyle, SummaryFooterStyle } from './eventSummaryStyle'
import { DeleteButton } from '../../eventFolder/eventStyle'
import { connect } from 'react-redux'
import { postDeleteAction } from '../../../redux/actions/postActions'
import moment from 'moment'

import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

function EventSummary({ allPosts, deleteEvent }) {
    return (
        <div className='event-summary'>

            {
                allPosts && allPosts.map(post => (
                    <EventSummaryStyle key={post.id}>
                        <SummaryStyle>
                            <SummaryTitleStyle to={`/event/${post.id}`} >
                                <h3 className="title">{post.title}</h3>
                            </SummaryTitleStyle>
                            <h6 className="content-summary">{post.summary}</h6>

                        </SummaryStyle>
                        <SummaryFooterStyle>
                            <span className="date">{moment(post.createdAt.toDate()).calendar()}</span>
                        </SummaryFooterStyle>
                        <DeleteButton onClick={() => deleteEvent(post.id)}>
                            delete
                </DeleteButton>
                    </EventSummaryStyle>
                ))
            }
        </div >
    )
}

const mapStateToProps = state => {
    //console.log('the state= ', state)
    return {
        allPosts: state.firestore.ordered.events
    }
}

const mapDispatchToProps = dispatch => ({
    deleteEvent: postId => dispatch(postDeleteAction(postId))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'events', orderBy: ['createdAt', 'desc'] }])
)(EventSummary)


/*
<span>Posted by <span className='poster'>poster name</span></span>
*/