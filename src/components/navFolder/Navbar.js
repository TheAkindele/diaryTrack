import React, { useState } from 'react'
import { Navbar, Navbox, NavMenu, NavItems, Title, IconStyle, SmallMenu, NavLinkStyle } from './navStyle'
import { connect } from 'react-redux'
import { signOutAction } from '../../redux/actions/authAction'

const NavBar = ({ signOut, userStatus }) => {
    const [smallNav, setSmallNav] = useState(false)

    const toggleNav = () => {
        setSmallNav(!smallNav)
        console.log('icon clicked')
        console.log('small nav= ', smallNav)
    }

    return (
        <Navbar>
            <Navbox>
                <Title to='/'><p>diaryTrack</p></Title>

                <NavItems>
                    {
                        userStatus.uid ?
                            (<NavMenu>
                                <NavLinkStyle to='/'>Events</NavLinkStyle>

                                <NavLinkStyle to='/new-event' className="new">New Event</NavLinkStyle>

                                <NavLinkStyle to='/sign-in' onClick={signOut}>Sign Out</NavLinkStyle>

                            </NavMenu>)
                            : (<NavLinkStyle to='/sign-in'>Sign In</NavLinkStyle>)
                    }
                </NavItems>
                <IconStyle onClick={toggleNav}> &#9776;</IconStyle>
            </Navbox>

            <div className={smallNav ? 'openNav' : 'closeNav'}>
                {
                    userStatus.uid ?
                        (<SmallMenu>
                            <NavLinkStyle to='/' >Events</NavLinkStyle>

                            <NavLinkStyle to='/new-event' >New Event</NavLinkStyle>

                            <NavLinkStyle to='/sign-in' onClick={signOut}>Sign Out</NavLinkStyle>

                        </SmallMenu>)
                        : (<NavLinkStyle to='/sign-in'>Sign In</NavLinkStyle>)
                }
            </div>
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