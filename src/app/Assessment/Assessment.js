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

    addAssessment = (event) => {
        event.preventDefault()
        const { assessments } = this.state
        const assessment = {
            name: this.state.name,
            address: this.state.address,
            telp: this.state.telp,
            u1: this.state.u1,
            u2: this.state.u2,
            u3: this.state.u3,
            u4: this.state.u4,
        }
        assessments.push(assessment)
        this.setState({ assessments })
        this.toggleAssessmentForm()
    }

    render() {
        return (
            <div>
                { this.state.showAssessmentForm &&
                    <AssessmentForm 
                        dataState={this.state}
                        toggleAssessmentForm={this.toggleAssessmentForm} 
                        addAssessment={this.addAssessment}
                        handleChange={this.handleChange}
                    />
                }
                { !this.state.showAssessmentForm &&
                    <AssessmentList
                        dataState={this.state}
                        toggleAssessmentForm={this.toggleAssessmentForm} 
                    />
                }
            </div>
        )
    }
}

export default Assessment