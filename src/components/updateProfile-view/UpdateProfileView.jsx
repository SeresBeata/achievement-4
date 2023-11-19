//Import UseState
import { useState } from 'react';
//Import components from React Bootstrap
import { Row, Col, Form, Button } from 'react-bootstrap';
//Import scss
import './updateProfile-view.scss';

//Create UpdateProfileView child component and export it
export const UpdateProfileView = ({ user, token }) => {
    //Create state variables, where the initial states are ''
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');

    const handleUpdate = (event) => {
        // Use preventDefault() to prevent default behavior of the form (reloading the entire page)
        event.preventDefault();

        const data = {
            name: username,
            password: password,
            email: email,
            birthday: birthday,
        };

        //Use fetch() to update the data of the current user
        fetch(
            `https://movie-myflix-c346f5fde8cf.herokuapp.com/users/${user._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }
        )
            .then(async (response) => {
                console.log('response:', response);
                if (response.ok) {
                    alert('Update successful!');
                    const data = await response.json();
                    localStorage.setItem('user', JSON.stringify(data));
                    window.location.reload();
                } else {
                    const errorText = await response.text();
                    // Read the response body as text
                    console.log('Error response body:', errorText);
                    alert('Update failed!');
                }
            })
            .catch((err) => console.log('error', err));
    };

    //Return a form for update the profile
    return (
        <Row className="justify-content-md-center justify-content-sm-center">
            <Col lg={4} md={6} sm={12} xs={12}>
                <Form
                    onSubmit={handleUpdate}
                    style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        borderRadius: '5px',
                        padding: '20px',
                        marginBottom: '50px',
                    }}
                    className="form-border"
                >
                    <div className="div-heading">
                        <h3 className="form-heading">UPDATE PROFILE</h3>
                    </div>
                    <Form.Group
                        controlId="formUsername"
                        style={{ marginBottom: '10px' }}
                    >
                        <Form.Label>
                            Current Username:{' '}
                            <span style={{ color: '#de4545' }}>
                                {user.username}
                            </span>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            minLength="5"
                            placeholder="Enter Your Updated Username"
                        />
                        <Form.Text>
                            Please, enter a Username of at least 5 characters.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group
                        controlId="formPassword"
                        style={{ marginBottom: '10px' }}
                    >
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter Your Updated Password"
                            minLength="5"
                            maxLength="10"
                            className="password-placeholder"
                        />
                        <Form.Text>
                            Please, enter a Password of at least 5 and maximum
                            10 characters.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group
                        controlId="formBasicEmail"
                        style={{ marginBottom: '10px' }}
                    >
                        <Form.Label>
                            Current Email address:{' '}
                            <span style={{ color: '#de4545' }}>
                                {user.email}
                            </span>
                        </Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter Your Updated Email"
                        />
                        <Form.Text>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ marginBottom: '10px' }}>
                        <Form.Label>
                            Current Birthday:{' '}
                            <span style={{ color: '#de4545' }}>
                                {user.birthday.split('T')[0]}
                            </span>
                        </Form.Label>
                        <br />
                        <Form.Label>Enter Your Updated Birthday:</Form.Label>
                        <Form.Control
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                        />
                        <Form.Text>
                            We'll never share your birthday with anyone else.
                        </Form.Text>
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
            </Col>
        </Row>
    );
};
