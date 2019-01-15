import React from 'react'
import './SampleForm.css'

class SampleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:'',
            city:'',
        }
    }

    handleFieldChange = (e) => {
        this.setState({[e.target.id]: e.target.value}) // dynamic key applied
    }

    handleSubmit = (e) => {
        e.preventDefault() // used to prevent reloading page
        console.log('Submitted')
        console.log(this.state)
        this.setState({
            username:'',
            email:'',
            city:'',
        })
    }

    render() {
        return(
            <form className='FormPaper' onSubmit={this.handleSubmit}>
                <div className="FormRow">
                    <label className='FormLabel' htmlFor="username">Username:</label>
                    <input className='FormInput' value={this.state.username} onChange={this.handleFieldChange} type="text" id="username" placeholder="Username" />
                </div>
                <div className="FormRow">
                    <label className='FormLabel' htmlFor="email">Email:</label>
                    <input className='FormInput' value={this.state.email} onChange={this.handleFieldChange} type="email" id="email" placeholder="Email" />
                </div>
                <div className="FormRow">
                    <label className='FormLabel' htmlFor="city">City:</label>
                    <select className='FormInput' value={this.state.city} onChange={this.handleFieldChange} id="city">
                        <option value=""></option>
                        <option value="Sydney">Sydney</option>
                        <option value="Melbourne">Melbourne</option>
                        <option value="Brisbane">Brisbane</option>
                    </select>
                </div>
                <div className="FromRow">
                    <button type="submit">Sign up</button>
                </div>
            </form>
        )
    }

}

export default SampleForm;