import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { FaSearch, FaBell, FaCaretDown } from 'react-icons/fa';


class NavbarComponent extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" className='navBar py-3'>
                    <NavbarBrand className='navLogo' href="/">
                        <img src=".\Resources\Imgs\logo.png" alt="No img" srcset="" className='img-fluid' width={100} />
                    </NavbarBrand>
                    <Nav className="nav-1">
                        <NavItem>
                            <NavLink href="#">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                TV Shows
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Movies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                News & Popular
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                My List
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavItem className='NavIcon'>
                        <FaSearch color='white' fontSize="2rem" className='mx-3'/>
                        <FaBell color='white' fontSize="2.2rem" className='mx-4'/>
                        <img width='30vw' src=".\Resources\Imgs\Profile logo\red.png" alt="" className='mx-4'/>
                        <FaCaretDown color='white' fontSize="2rem" />
                    </NavItem>
                </Navbar>
            </>
        )
    }
}

export default NavbarComponent;