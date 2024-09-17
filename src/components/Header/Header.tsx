import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { faSearch, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="header-container">
                <Navbar.Brand href="/" style={{ color: 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash} />Gold
                </Navbar.Brand>

                <Nav className="link-group" navbarScroll>
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Home
                    </NavLink>
                    <NavLink to="/movies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Movies
                    </NavLink>
                    <NavLink to="/categories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                        Categories
                    </NavLink>
                </Nav>

                <div className="info">
                    <NavLink to="/search" className="search">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </NavLink>
                    <Button variant="outline-info" className="login">Log In</Button>
                    <Button variant="outline-info" className="signup">Register</Button>
                </div>
            </Container>
        </Navbar>
    );
}
