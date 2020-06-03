import React from 'react'
import { Navbar, Navbox, NavMenu, NavItems, Title } from './navStyle'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOutAction } from '../../redux/actions/authAction'

const NavBar = ({ signOut, userStatus }) => {
    return (
        <Navbar>
            <Navbox>
                <Title to='/'><h2>diaryTrack</h2></Title>
                <NavItems>

                    {
                        userStatus.uid ?
                            (<NavMenu>
                                <Link to='/'>Events</Link>

                                <Link to='/new-event' className="list new">New Event</Link>

                                <Link to='/sign-in' onClick={signOut}>Sign Out</Link>

                            </NavMenu>)
                            : (<Link to='/sign-in'>Sign In</Link>)
                    }

                </NavItems>
            </Navbox>
        </Navbar >
    );
}

const mapStateToProps = state => {
    //console.log('navbar ', state)
    return {
        userStatus: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);