import React from 'react'
import { SummaryStyle } from './eventSummaryStyle'
import { Link } from 'react-router-dom'

function EventSummary() {
    return (
        <div className='event-summary'>
            <SummaryStyle>
                <Link to='/event'><h3 className="title">House Party Event</h3></Link>
                <h6 className="posted">Posted by Mr Wale</h6>
                <p className="date">date & Time</p>
            </SummaryStyle>
            <SummaryStyle>
                <Link to='/event'><h3 className="title">House Party Event</h3></Link>
                <h6 className="posted">Posted by Mr Wale</h6>
                <p className="date">date & Time</p>
            </SummaryStyle>
        </div>
    )
}

export default EventSummary