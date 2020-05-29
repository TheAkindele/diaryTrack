import React from 'react'
import { EventFooter, EventBody, Eventbox } from './eventStyle'
import { connect } from 'react-redux'

const Event = ({ selectedpost }) => {
    //console.log('selected project= ', selectedpost)
    const { title, content, fullname } = selectedpost
    return (
        <Eventbox>
            <EventBody>
                <h4 className="title">
                    {title}
                </h4>
                <p className="event">
                    {content}
                </p>
            </EventBody>
            <EventFooter>
                <p className="name">posted by <span>{fullname}</span> </p>
                <p className="date">date & Time</p>
            </EventFooter>
        </Eventbox>
    )
}

const mapStateToProps = state => ({
    selectedpost: state.postState.post
})

export default connect(mapStateToProps)(Event)
