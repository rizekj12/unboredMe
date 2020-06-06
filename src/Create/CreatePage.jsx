import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class CreatePage extends Component {
    state ={
        newActivity:'',
        typeOf:'',
        numOfPart:''
    }

    makeChange = (e) => {
        const name =e.target.name
        const value =e.target.value
        this.setState({
        [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.change(this.state)
        this.props.history.push("/")
    }
    
    
    render() {
        return (
            <div className="typePage secondPage">
                <form onSubmit={this.handleSubmit}>
                    <div className="createActivity">
                        <input name="newActivity" placeholder="Activity" type="text" onChange={this.makeChange}/>
                        <input name="typeOf" placeholder="Type" type="text" onChange={this.makeChange}/>
                        <input name="numOfPart" placeholder="Participants" type="text" onChange={this.makeChange}/>
                        <button>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (CreatePage)


