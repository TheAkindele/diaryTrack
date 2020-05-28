import React from 'react'
import { Navbar, Navbox, NavMenu, Title } from './navStyle'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar>
            <Navbox>
                <Title to='/'><h2>diaryTrack</h2></Title>
                <NavMenu>
                    <Link to='/create-event' className="list new">New Event</Link>
                    <Link className="list log-out">Sign In</Link>
                    <div className="list initial">MA</div>
                </NavMenu>
            </Navbox>
        </Navbar>
    );
}

export default NavBar;