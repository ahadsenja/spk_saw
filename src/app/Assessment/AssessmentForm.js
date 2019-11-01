import React from 'react'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'

class AssessmentForm extends React.Component {

    render() {
        const { name, address, telp, u1, u2, u3, u4 } = this.props.dataState

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
                                        <Form.Control name='name' placeholder='Name' value={name} onChange={this.props.handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control name='address' placeholder='Address' value={address} onChange={this.props.handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group>
                                        <Form.Label>Telp</Form.Label>
                                        <Form.Control name='telp' placeholder='Telp' value={telp} onChange={this.props.handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U1</Form.Label>
                                        <Form.Control name='u1' placeholder='U1' value={u1} onChange={this.props.handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U2</Form.Label>
                                        <Form.Control name='u2' placeholder='U2' value={u2} onChange={this.props.handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U3</Form.Label>
                                        <Form.Control name='u3' placeholder='U3' value={u3} onChange={this.props.handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>U4</Form.Label>
                                        <Form.Control name='u4' placeholder='U4' value={u4} onChange={this.props.handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant='info' onClick={this.props.addAssessment} mode='add'>Submit</Button>
                            <span style={{ paddingRight: '5px' }}></span>
                            <Button variant='secondary' onClick={this.props.toggleAssessmentForm}>Cancel</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AssessmentForm