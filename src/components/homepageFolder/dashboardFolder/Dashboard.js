import React from 'react'
import EventSummary from '../eventSummaryFolder/EventSummary'
//import Notification from '../notificationFolder/Notification'
import { DashboardStyle } from './dashboardStyle'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Dashboard = ({ userStatus }) => {
    if (!userStatus.uid)
        return <Redirect to='/sign-in'></Redirect>

    return (
        <DashboardStyle>
            <EventSummary />
        </DashboardStyle>
    );
}

const mapStateToProps = state => ({
    userStatus: state.firebase.auth
})

export default connect(mapStateToProps)(Dashboard)
