//Import components from React Bootstrap
import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap';
//import scss
import './profile-view.scss';
//import Link
import { Link } from 'react-router-dom';

//Create ProfileView child component and export it
export const ProfileView = ({ user }) => {
    return (
        <Row className="justify-content-md-center justify-content-sm-center">
            <Col
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="justify-content-md-center justify-content-sm-center"
            >
                <Card className="card card-border">
                    <ListGroup>
                        <ListGroup.Item className="card-border listgroup-heading">
                            <h3 className="card-heading">YOUR PROFILE</h3>
                        </ListGroup.Item>

                        <ListGroup.Item className="card-border listgroup-item">
                            <span className="listgroup-item--info">
                                Username:
                            </span>{' '}
                            <span style={{ color: '#de4545' }}>
                                {user.username}
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item className="card-border listgroup-item">
                            <span className="listgroup-item--info">Email:</span>{' '}
                            <span style={{ color: '#de4545' }}>
                                {user.email}
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item className="card-border listgroup-item">
                            <span className="listgroup-item--info">
                                Birthday:
                            </span>{' '}
                            <span style={{ color: '#de4545' }}>
                                {user.birthday.split('T')[0]}
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item className="card-border listgroup-item">
                            <Link
                                to={`/users/update/${encodeURIComponent(
                                    user._id
                                )}`}
                            >
                                <Button className="card-button">
                                    To update
                                </Button>
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};
