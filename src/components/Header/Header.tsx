import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { faSearch, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import { useState } from "react";

export const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleAuthorize = () => {
        navigate("/authorize")
    }

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="header-container">
                <Navbar.Brand href="/" style={{ color: 'white' }}>
                    <FontAwesomeIcon icon={faVideoSlash} />MovieBox
                </Navbar.Brand>
                
                <Nav className={`link-group ${menuOpen ? 'open' : ''}`} navbarScroll>

                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/movies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Movies
                    </NavLink>
                    <NavLink to="/categories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Categories
                    </NavLink>
                    <NavLink to="/community" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Community
                    </NavLink>
                </Nav>

                <div className="info">
                    <NavLink to="/search" className="search">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </NavLink>
                    <Button variant="outline-info" className="signup" onClick={handleAuthorize}>Authorize</Button>
                    <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="menu-icon" />
                </div>
            </Container>
        </Navbar>
    );
}
