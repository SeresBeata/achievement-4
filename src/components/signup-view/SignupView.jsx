import { useState } from 'react';
//Import components from React Bootstrap
import { Form, Button } from 'react-bootstrap';
//import scss
import './signup-view.scss';

//Create SignupView child component
//Export the created child component SignupView, and return register form
export const SignupView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (event) => {
        // Use preventDefault() to prevent default behavior of the form (reloading the entire page)
        event.preventDefault();

        const data = {
            username: username,
            password: password,
            email: email,
            birthday: birthday,
        };

        //Use fetch() method for "/users" endpoint of myFlix API
        fetch('https://movie-myflix-c346f5fde8cf.herokuapp.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) {
                alert('Signup successful');
                window.location.reload();
            } else {
                alert('Signup failed');
            }
        });
    };

    //Return register form
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
                <h3 className="form-heading">SIGNUP</h3>
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
                <Form.Text>
                    Please, enter a Username of at least 5 characters.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Your Password"
                    minLength="5"
                    maxLength="10"
                />
                <Form.Text>
                    Please, enter a Password of at least 5 and maximum 10
                    characters.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter email"
                />
                <Form.Text>
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <Form.Text>Entering your birthday is optional.</Form.Text>
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
        </Form>
    );
};
