//Import components from React Bootstrap
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

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
                <Card
                    style={{ textAlign: 'center', margin: '30px 20px 0 20px' }}
                >
                    <Card.Header
                        style={{
                            backgroundColor: '#322b2b',
                            color: '#ede0df',
                            fontWeight: 'bolder',
                        }}
                    >
                        Your Profile
                    </Card.Header>
                    <ListGroup>
                        <ListGroup.Item>
                            <span
                                style={{
                                    color: '#2c2425',
                                    fontWeight: 'bolder',
                                }}
                            >
                                Username:
                            </span>{' '}
                            {user.username}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span
                                style={{
                                    color: '#2c2425',
                                    fontWeight: 'bolder',
                                }}
                            >
                                Email:
                            </span>{' '}
                            {user.email}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span
                                style={{
                                    color: '#2c2425',
                                    fontWeight: 'bolder',
                                }}
                            >
                                Birthday:
                            </span>{' '}
                            {user.birthday.split('T')[0]}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};
