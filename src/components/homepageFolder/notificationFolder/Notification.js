import React from 'react'
import { NotificationStyle } from './notificationStyle'

const Notification = () => {
    return (
        <div className='notification-box'>
            <NotificationStyle>
                <h3 className="title">Notifications</h3>
                <div className="notify">
                    <h6>Mr Wale <span>Added a new post</span></h6>
                    <p>a few min ago</p>
                </div>
                <div className="notify">
                    <h6>Mr Wale <span>Added a new post</span></h6>
                    <p>a few min ago</p>
                </div>
            </NotificationStyle>
        </div>
    )
}

export default Notification
