import React from 'react'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'

class AssessmentForm extends React.Component {

    render() {
        return (
            <div>
                <Card>
                    <Card.Title style={{ paddingTop: '20px', paddingLeft: '20px' }}>Assessment Form</Card.Title>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name='name' placeholder='Name' />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control name='name' placeholder='Address' />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label>Telp</Form.Label>
                                        <Form.Control name='name' placeholder='Telp' />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U1</Form.Label>
                                        <Form.Control placeholder='U1' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U2</Form.Label>
                                        <Form.Control placeholder='U2' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U3</Form.Label>
                                        <Form.Control placeholder='U3' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U4</Form.Label>
                                        <Form.Control placeholder='U4' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant='info'>Submit</Button>
                            <span style={{ paddingRight: '5px' }}></span>
                            <Button variant='secondary'>Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AssessmentForm