import React from 'react'
import { EventsSummary, SummaryStyle, EventSummaryStyle, SummaryTitleStyle, SummaryFooterStyle, LinkStyle } from './eventSummaryStyle'
import { DeleteButton } from '../../eventFolder/eventStyle'
import { connect } from 'react-redux'
import { postDeleteAction } from '../../../redux/actions/postActions'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

function EventSummary({ allPosts, deleteEvent }) {
    console.log('all post ', allPosts)
    return (
        <EventsSummary>
            {
                allPosts != 'undefined' && allPosts != null && allPosts.length && allPosts.length > 0 ?
                    (
                        allPosts.map(post => (
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
                    )
                    : <LinkStyle to='/new-event'>Click to create an event</LinkStyle>
            }
        </EventsSummary >
    )
}

const mapStateToProps = state => {
    const eventsOrder = state.firestore.ordered.events
    console.log('event order= ', eventsOrder)
    Array.isArray(eventsOrder)
    return {
        allPosts: eventsOrder
    }
}

const mapDispatchToProps = dispatch => ({
    deleteEvent: postId => dispatch(postDeleteAction(postId))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'events', orderBy: ['createdAt', 'desc'] }])
)(EventSummary)
