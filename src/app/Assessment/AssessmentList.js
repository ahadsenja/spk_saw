import React from 'react'
import { Table, Button } from 'react-bootstrap';

class AssessmentList extends React.Component {
    render() {
        return (
            <div>
                <div style={{ paddingBottom: '10px' }} align='right'>
                    <Button variant='info' size='sm' onClick={this.props.toggleAssessmentForm}>Add Data</Button>
                </div>
                <Table striped bordered hover responsive size='sm'>
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
                        <tr>
                            <td>1</td>
                            <td>Danil</td>
                            <td>Mataram</td>
                            <td>089987787675</td>
                            <td>78</td>
                            <td>90</td>
                            <td>70</td>
                            <td>85</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default AssessmentList