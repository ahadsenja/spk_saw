import React from 'react'
import AssessmentForm from './AssessmentForm'
import AssessmentList from './AssessmentList'

class Assessment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            telp: '',
            u1: '',
            u2: '',
            u3: '',
            u4: '',
            assessments: [],
            showAssessmentForm: false,
            mode: 'add'
        }
    }

    toggleAssessmentForm = () => {
        this.setState({
            showAssessmentForm: !this.state.showAssessmentForm
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                { this.state.showAssessmentForm &&
                    <AssessmentForm />
                }
                { !this.state.showAssessmentForm &&
                    <AssessmentList toggleAssessmentForm={this.toggleAssessmentForm} />
                }
            </div>
        )
    }
}

export default Assessment