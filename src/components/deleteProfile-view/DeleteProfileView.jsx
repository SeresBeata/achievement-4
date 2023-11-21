//Import components from React Bootstrap
import { Row, Col, Form, Button } from 'react-bootstrap';
//import Link
import { Link } from 'react-router-dom';
//import scss
import './deleteProfiel-view.scss';

//Create DeleteProfileView child component and export it
export const DeleteProfileView = ({ user, token, setUser }) => {
    //DELETE ACCOUNT
    const deleteAccount = (event) => {
        // Use preventDefault() to prevent default behavior of the form (reloading the entire page)
        event.preventDefault();

        //Use fetch() to delete account of the current user
        fetch(
            `https://movie-myflix-c346f5fde8cf.herokuapp.com/users/${user._id}`,
            {
                method: 'DELETE',
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                // body: JSON.stringify(data),
            }
        ).then((response) => {
            if (response.ok) {
                setUser(null);
                localStorage.clear();
                alert('Your account has been succesfully deleted!');
                window.location.replace('/login');
            } else {
                alert('We could not delete your account.');
            }
        });
    };

    //Return a form for delete the account
    return (
        <Row className="justify-content-md-center justify-content-sm-center">
            <Col lg={4} md={6} sm={12} xs={12}>
                <Form
                    style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        borderRadius: '5px',
                        padding: '20px',
                        marginBottom: '50px',
                    }}
                    className="form-border"
                >
                    <div className="div-heading">
                        <h3 className="form-heading">DELETE ACCOUNT</h3>
                    </div>
                    <div style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                        Are you sure, you want to delete your account?
                    </div>
                    <br />
                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                        We are very sorry to have to say goodbye to you. You're
                        welcome to come back anytime.
                    </div>

                    <div className="div-button">
                        <Link to="/login">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={deleteAccount}
                                style={{
                                    fontWeight: 'bolder',
                                    marginTop: '20px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                DELETE ACCOUNT
                            </Button>
                        </Link>
                    </div>
                </Form>
            </Col>
        </Row>
    );
};
