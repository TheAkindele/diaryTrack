import React from 'react'
import EventSummary from '../eventSummaryFolder/EventSummary'
import Notification from '../notificationFolder/Notification'
import { DashboardStyle } from './dashboardStyle'

const Dashboard = () => {
    return (
        <DashboardStyle>
            <div>
                <EventSummary />
            </div>
            <div>
                <Notification />
            </div>
        </DashboardStyle>
    );
}

export default Dashboard;