//Import from React-Bootstrap
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
//Import from react-router-dom
import { Link } from 'react-router-dom';
//import scss
import './navigation-bar.scss';

//Create NavigationBar child component and export it
export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar
            expand="lg"
            className="navbar-bg navbar-dark"
            style={{ marginBottom: '20px' }}
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{ color: '#ff1a1a', fontWeight: 'bolder' }}
                    className="navbar-brand"
                >
                    myFlix
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* If user is "falsy", then display the login and signup links */}
                        {!user && (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/signup">
                                    Signup
                                </Nav.Link>
                            </>
                        )}
                        {/* If user is "truthy", then display the home and logout links */}
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                {/* Use the onLoggedOut prop to be called when logout is clicked. */}
                                <Nav.Link onClick={onLoggedOut}>
                                    Logout
                                </Nav.Link>
                                <NavDropdown
                                    title="Profile"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to={`/users/${encodeURIComponent(
                                            user._id
                                        )}`}
                                    >
                                        See Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        Update Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        as={Link}
                                        to={`/users/favMovies/${encodeURIComponent(
                                            user._id
                                        )}`}
                                    >
                                        Favourite Movies
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        Delete Account
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
