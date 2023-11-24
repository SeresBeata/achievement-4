import { useState } from 'react';
//Import components from React Bootstrap
import { Form, Button } from 'react-bootstrap';
//Import from react-router-dom
import { Link } from 'react-router-dom';
//import scss
import './login-view.scss';

//Create LoginView child component
//Pass function from parent component (MainView) to the child component (LoginView) by using prop
//Export the created child component LoginView, and return login form
export const LoginView = ({ onLoggedIn }) => {
    //Create state variable "username" and "password", with initial state ''.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        // Use preventDefault() to prevent default behavior of the form (reloading the entire page)
        event.preventDefault();

        const data = {
            username: username,
            password: password,
        };

        //Use fetch() method for "/login" endpoint of myFlix API
        fetch('https://movie-myflix-c346f5fde8cf.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json()) //transforms the response content into a JSON object that can be used to extract the JWT sent by API.
            .then((data) => {
                console.log('Login response: ', data);
                if (data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user)); //use localStorage to store the user object
                    localStorage.setItem('token', data.token); //use the localStorage to store the token
                    onLoggedIn(data.user, data.token); //pass the user and token back to MainView so they can be used in all the subsequent API requests.
                } else {
                    alert(
                        'Username or password is incorrect. Try again, please!'
                    );
                }
            })
            .catch((e) => {
                alert('Oh, sorry! Something went wrong. Please, try again!');
            });
    };

    //Login as guest
    //Guest sign in info
    const userName = 'Guest';
    const passWord = 'guest123';

    const guestHandleSubmit = (event) => {
        // Use preventDefault() to prevent default behavior of the form (reloading the entire page)
        event.preventDefault();

        const data = {
            username: userName,
            password: passWord,
        };

        //Use fetch() method for "/login" endpoint of myFlix API
        fetch('https://movie-myflix-c346f5fde8cf.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json()) //transforms the response content into a JSON object that can be used to extract the JWT sent by API.
            .then((data) => {
                console.log('Login response: ', data);
                if (data.user) {
                    localStorage.setItem('user', JSON.stringify(data.user)); //use localStorage to store the user object
                    localStorage.setItem('token', data.token); //use the localStorage to store the token
                    onLoggedIn(data.user, data.token); //pass the user and token back to MainView so they can be used in all the subsequent API requests.
                } else {
                    alert(
                        'Username or password is incorrect. Try again, please!'
                    );
                }
            })
            .catch((e) => {
                alert('Oh, sorry! Something went wrong. Please, try again!');
            });
    };

    //Return Login form
    return (
        <Form
            onSubmit={handleSubmit}
            style={{
                background: 'rgba(0, 0, 0, 0.6)',
                borderRadius: '5px',
                padding: '20px',
            }}
            className="form-border"
        >
            <div className="div-heading">
                <h3 className="form-heading">LOGIN</h3>
            </div>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="5"
                    placeholder="Your Username"
                />
            </Form.Group>
            <Form.Group controlId="formPassword" style={{ marginTop: '10px' }}>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="5"
                    maxLength="10"
                    placeholder="Your Password"
                />
            </Form.Group>
            <div className="div-button">
                <Button
                    variant="primary"
                    type="submit"
                    style={{
                        fontWeight: 'bolder',
                        marginTop: '20px',
                        textTransform: 'uppercase',
                    }}
                >
                    Submit
                </Button>
            </div>
            <div
                className="div-button"
                style={{ marginTop: '25px', color: '#635f5f' }}
            >
                Or continue as a guest:
            </div>
            <div className="div-button">
                <Button
                    type="submit"
                    onClick={guestHandleSubmit}
                    className="continue-btn"
                >
                    Continue as Guest
                </Button>
            </div>
            <div
                className="div-button"
                style={{ marginTop: '25px', color: '#635f5f' }}
            >
                Not a member? &nbsp;
                <Link
                    to={'/signup'}
                    style={{ textDecoration: 'none', color: '#b30000' }}
                >
                    Signup!
                </Link>
            </div>
        </Form>
    );
};
