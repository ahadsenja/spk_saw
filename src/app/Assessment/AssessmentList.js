import React from 'react'
import { Table, Button, Card } from 'react-bootstrap';

class AssessmentList extends React.Component {
    render() {
        const { assessments } = this.props.dataState

        return (
            <div>
                <Card>
                    <Card.Title style={{ paddingTop: 20, paddingLeft: 20 }}>List Data Table</Card.Title>
                    <div style={{ paddingBottom: 10, paddingLeft: 20 }}>
                        <Button variant='info' size='sm' onClick={this.props.toggleAssessmentForm}>Add Data</Button>
                    </div>
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Telepon</th>
                                <th>U1</th>
                                <th>U2</th>
                                <th>U3</th>
                                <th>U4</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                assessments.map((ass, i) =>
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{ass.name}</td>
                                        <td>{ass.address}</td>
                                        <td>{ass.telp}</td>
                                        <td>{ass.u1}</td>
                                        <td>{ass.u2}</td>
                                        <td>{ass.u3}</td>
                                        <td>{ass.u4}</td>
                                        <td>
                                            <Button variant='warning' size='sm'>i</Button>
                                            <Button variant='danger' size='sm'>x</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Card>
            </div>
        )
    }
}

export default AssessmentList