//Import from React-Bootstrap
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
//Import from react-router-dom
import { Link } from 'react-router-dom';

//Create NavigationBar child component and export it
export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar expand="lg" className="navbar-bg navbar-dark">
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{ color: '#fbd6da', fontWeight: 'bolder' }}
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
                                    title="Dropdown"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
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
