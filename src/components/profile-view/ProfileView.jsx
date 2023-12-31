//Import components from React Bootstrap
import { Card, ListGroup, Row, Col, Button, Form } from 'react-bootstrap';
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
                md={8}
                sm={12}
                xs={12}
                className="justify-content-md-center justify-content-sm-center"
            >
                <Form
                    style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        borderRadius: '5px',
                        padding: '20px 0 20px 0',
                        marginBottom: '50px',
                    }}
                    className="form-border"
                >
                    <div
                        className="div-heading"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '25px',
                        }}
                    >
                        <h3 className="form-heading">YOUR PROFILE</h3>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            style={{ height: '100px' }}
                        >
                            <defs>
                                <style>
                                    {
                                        '.cls-3{fill:#c73b40}.cls-4{fill:#ffff97}.cls-6{fill:#d8ae6c}'
                                    }
                                </style>
                            </defs>
                            <title />
                            <g id="Layer_25" data-name="Layer 25">
                                <path
                                    d="M58.741 5.579A6.072 6.072 0 0 0 53 1a5.963 5.963 0 0 0-5.326 3.487A5.836 5.836 0 0 0 43 2.075a5.956 5.956 0 0 0-5.288 3.4 5.882 5.882 0 0 0-11.424 0A5.956 5.956 0 0 0 21 2.075a5.836 5.836 0 0 0-4.674 2.412A5.963 5.963 0 0 0 11 1a6.072 6.072 0 0 0-5.741 4.579A6.41 6.41 0 0 0 1 11.751 6.237 6.237 0 0 0 7 18.2 6.646 6.646 0 0 0 9 23l.027-.044A6.492 6.492 0 0 1 21 20.047a6.487 6.487 0 0 1 11 0 6.487 6.487 0 0 1 11 0 6.492 6.492 0 0 1 11.973 2.909L55 23a6.646 6.646 0 0 0 2-4.8 6.237 6.237 0 0 0 6-6.451 6.41 6.41 0 0 0-4.259-6.17Z"
                                    style={{
                                        fill: '#fccb7e',
                                    }}
                                />
                                <path
                                    d="M63 11.75a6.241 6.241 0 0 1-6 6.45 6.665 6.665 0 0 1-2 4.8.173.173 0 0 0-.03-.04 6.4 6.4 0 0 0-2-4.17 5.828 5.828 0 0 0 .03-.59 6.241 6.241 0 0 0 6-6.45 6.4 6.4 0 0 0-4.26-6.17 6.3 6.3 0 0 0-3.72-4.21A5.443 5.443 0 0 1 53 1a6.074 6.074 0 0 1 5.74 4.58A6.4 6.4 0 0 1 63 11.75Z"
                                    style={{
                                        fill: '#fdd598',
                                    }}
                                />
                                <path
                                    d="M21 20.047a6.492 6.492 0 0 0-11.973 2.909c-.014.18-.027.36-.027.544 0 .055 4 39.5 4 39.5h10l-1.733-43.324c-.09.124-.186.242-.267.371Z"
                                    className="cls-3"
                                />
                                <path
                                    d="M26.5 17a6.471 6.471 0 0 0-5.233 2.676L23 63h9V20.047A6.489 6.489 0 0 0 26.5 17ZM54.973 22.956A6.492 6.492 0 0 0 43 20.047c-.081-.129-.177-.248-.267-.371L41 63h10l4-39.5c0-.184-.013-.364-.027-.544Z"
                                    className="cls-4"
                                />
                                <path
                                    d="M54.973 22.956a6.46 6.46 0 0 0-7.967-5.773 6.5 6.5 0 0 1 4.967 5.773c.014.18.027.36.027.544L48 63h3l4-39.5c0-.184-.013-.364-.027-.544Z"
                                    style={{
                                        fill: '#ffffac',
                                    }}
                                />
                                <path
                                    d="M37.5 17a6.489 6.489 0 0 0-5.5 3.047V63h9l1.733-43.324A6.471 6.471 0 0 0 37.5 17Z"
                                    className="cls-3"
                                />
                                <path d="M59.545 4.81A7.077 7.077 0 0 0 53 0a6.819 6.819 0 0 0-5.488 2.829A6.715 6.715 0 0 0 43 1.075a6.791 6.791 0 0 0-5.1 2.352 6.784 6.784 0 0 0-11.79 0A6.791 6.791 0 0 0 21 1.075a6.715 6.715 0 0 0-4.512 1.754A6.819 6.819 0 0 0 11 0a7.077 7.077 0 0 0-6.545 4.81A7.412 7.412 0 0 0 0 11.751a7.323 7.323 0 0 0 6.056 7.383 7.649 7.649 0 0 0 1.95 4.24c0 .043-.006.084-.006.126 0 .07 0 .105 4.005 39.6A1 1 0 0 0 13 64h38a1 1 0 0 0 1-.9l4-39.5c0-.034.005-.068.005-.1s-.005-.083-.006-.126a7.649 7.649 0 0 0 1.95-4.24A7.323 7.323 0 0 0 64 11.751a7.412 7.412 0 0 0-4.455-6.941ZM13.9 62c-.591-5.845-3.864-38.113-3.9-38.5 0-.156.012-.31.023-.461A5.528 5.528 0 0 1 15.5 18a5.472 5.472 0 0 1 4.653 2.579 1.044 1.044 0 0 0 .157.192L21.959 62Zm9.789-43.22c.116-.07.235-.132.356-.193a5.013 5.013 0 0 1 .887-.352c.088-.027.177-.054.267-.076.138-.033.279-.058.421-.081.072-.012.143-.027.217-.036A5.542 5.542 0 0 1 26.5 18a5.46 5.46 0 0 1 4.5 2.366V62h-7.039L22.28 20a5.549 5.549 0 0 1 1.283-1.137c.043-.028.085-.057.129-.083ZM40.039 62H33V20.366a5.794 5.794 0 0 1 .339-.445c.08-.094.165-.182.251-.269s.145-.15.222-.22.183-.156.277-.231.162-.132.247-.192.2-.131.3-.194.175-.11.266-.159c.108-.058.22-.107.332-.158.091-.041.181-.086.274-.123.121-.047.246-.083.37-.121.09-.028.177-.06.268-.084.142-.035.288-.058.434-.083.077-.013.153-.033.232-.043a5.349 5.349 0 0 1 1.346 0c.073.009.145.024.217.036.142.023.283.048.421.081.09.022.179.05.267.076a4.856 4.856 0 0 1 .887.352c.121.061.24.123.356.193.044.026.086.055.129.083A5.549 5.549 0 0 1 41.72 20ZM50.1 62h-8.059l1.649-41.229a1.044 1.044 0 0 0 .157-.192A5.472 5.472 0 0 1 48.5 18a5.528 5.528 0 0 1 5.476 5.037c.011.138.022.275.024.416ZM57 17.2a1 1 0 0 0-1 1 5.812 5.812 0 0 1-.556 2.487c-.014-.036-.036-.068-.051-.1A7.69 7.69 0 0 0 55 19.8c-.028-.048-.053-.1-.082-.146a7.636 7.636 0 0 0-.548-.784c-.043-.055-.088-.107-.133-.16a7.535 7.535 0 0 0-.663-.71l-.006-.006a7.594 7.594 0 0 0-.765-.609c-.057-.04-.113-.08-.171-.119a7.428 7.428 0 0 0-.828-.484c-.047-.023-.095-.042-.142-.064a7.394 7.394 0 0 0-.825-.331c-.051-.017-.1-.037-.153-.053a7.334 7.334 0 0 0-.95-.224c-.071-.012-.141-.021-.213-.031A7.324 7.324 0 0 0 48.5 16a7.76 7.76 0 0 0-.81.044c-.092.01-.182.03-.273.043-.173.025-.346.049-.516.086-.108.023-.213.057-.32.085-.148.039-.3.076-.443.125-.112.037-.221.083-.331.125-.135.052-.27.1-.4.162-.111.051-.218.109-.326.164-.125.064-.25.128-.371.2s-.21.133-.314.2-.23.152-.342.235-.2.154-.3.234a6.183 6.183 0 0 0-.586.537c-.056.057-.117.108-.171.167a7.508 7.508 0 0 0-1.339-1.138c-.031-.021-.063-.04-.094-.06a7.274 7.274 0 0 0-.59-.346c-.071-.038-.144-.074-.217-.11a7.685 7.685 0 0 0-.795-.332c-.162-.056-.325-.1-.491-.148-.1-.029-.207-.06-.313-.084a8.007 8.007 0 0 0-.536-.095c-.095-.014-.189-.034-.284-.045a7.11 7.11 0 0 0-1.724.007c-.094.011-.185.029-.278.044a6.97 6.97 0 0 0-1.433.371c-.1.035-.194.07-.29.109-.2.082-.385.174-.572.272-.068.035-.138.065-.2.1a7.458 7.458 0 0 0-.718.458c-.061.044-.117.095-.177.141-.169.13-.334.265-.492.41-.078.071-.151.146-.225.22s-.156.145-.228.223c-.072-.078-.152-.148-.228-.223s-.147-.149-.225-.22a7.4 7.4 0 0 0-.493-.411c-.059-.045-.115-.1-.175-.139a7.413 7.413 0 0 0-.719-.459c-.066-.038-.136-.068-.2-.1-.187-.1-.377-.19-.572-.272-.1-.039-.193-.074-.29-.109a7.073 7.073 0 0 0-1.433-.372c-.093-.014-.184-.032-.278-.043a7.11 7.11 0 0 0-1.724-.007c-.1.011-.189.031-.284.045-.18.027-.359.055-.536.095-.106.024-.209.055-.314.084a7.475 7.475 0 0 0-.49.148c-.1.034-.191.071-.286.109a7.685 7.685 0 0 0-.509.223c-.073.036-.146.072-.217.11q-.3.159-.589.346l-.1.06A7.508 7.508 0 0 0 21 18.407c-.054-.059-.115-.11-.171-.167-.089-.091-.178-.18-.271-.266s-.208-.183-.315-.271-.194-.159-.295-.234-.227-.159-.343-.235-.206-.138-.313-.2-.246-.135-.371-.2c-.108-.055-.215-.113-.326-.164-.132-.059-.267-.11-.4-.162-.11-.042-.219-.088-.331-.125-.145-.049-.295-.086-.444-.125-.107-.029-.211-.062-.319-.085-.17-.037-.343-.061-.516-.086-.092-.013-.181-.033-.273-.043A7.76 7.76 0 0 0 15.5 16a7.324 7.324 0 0 0-1.021.079c-.072.01-.142.019-.213.031a7.334 7.334 0 0 0-.95.224c-.052.016-.1.036-.154.053a7.657 7.657 0 0 0-.824.331c-.047.022-.095.041-.142.065a7.512 7.512 0 0 0-.828.483c-.058.039-.114.079-.171.119a7.5 7.5 0 0 0-.764.609l-.009.006a7.6 7.6 0 0 0-.662.7c-.045.054-.09.107-.134.162a7.592 7.592 0 0 0-.546.782c-.03.049-.055.1-.083.148a7.5 7.5 0 0 0-.393.787c-.015.035-.036.066-.05.1A5.812 5.812 0 0 1 8 18.2a1 1 0 0 0-1-1 5.246 5.246 0 0 1-5-5.45 5.449 5.449 0 0 1 3.568-5.221 1 1 0 0 0 .654-.679A5.043 5.043 0 0 1 11 2a4.956 4.956 0 0 1 4.425 2.921 1 1 0 0 0 1.7.165A4.835 4.835 0 0 1 21 3.075a4.956 4.956 0 0 1 4.394 2.851.98.98 0 0 0 .981.549 1 1 0 0 0 .871-.71 4.884 4.884 0 0 1 9.508 0 1 1 0 0 0 .871.71.976.976 0 0 0 .981-.549A4.956 4.956 0 0 1 43 3.075a4.835 4.835 0 0 1 3.874 2.011 1.008 1.008 0 0 0 .9.395 1 1 0 0 0 .8-.56A4.956 4.956 0 0 1 53 2a5.043 5.043 0 0 1 4.778 3.85 1 1 0 0 0 .654.679A5.449 5.449 0 0 1 62 11.751a5.246 5.246 0 0 1-5 5.449Z" />
                                <path
                                    d="M13 10h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM33 10h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM23 14h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM53 10h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM43 14h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
                                    className="cls-6"
                                />
                            </g>
                        </svg>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '25px',
                        }}
                    >
                        <span
                            style={{
                                color: '#959090',
                                fontWeight: 'bolder',
                                paddingRight: '10px',
                            }}
                        >
                            Username:
                        </span>{' '}
                        <span style={{ color: '#de4545' }}>
                            {user.username}
                        </span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <span
                            style={{
                                color: '#959090',
                                fontWeight: 'bolder',
                                paddingRight: '10px',
                            }}
                        >
                            Email:
                        </span>{' '}
                        <span style={{ color: '#de4545' }}>{user.email}</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10px',
                        }}
                    >
                        {' '}
                        <span
                            style={{
                                color: '#959090',
                                fontWeight: 'bolder',
                                paddingRight: '10px',
                            }}
                        >
                            Birthday:
                        </span>{' '}
                        <span style={{ color: '#de4545' }}>
                            {user.birthday.split('T')[0]}
                        </span>
                    </div>

                    <div className="div-button">
                        <Link
                            to={`/users/update/${encodeURIComponent(user._id)}`}
                        >
                            <Button
                                style={{
                                    fontWeight: 'bolder',
                                    margin: '30px 0 10px 0',
                                    textTransform: 'uppercase',
                                    color: 'black',
                                }}
                            >
                                To update
                            </Button>
                        </Link>
                    </div>
                </Form>
            </Col>
        </Row>
    );
};
