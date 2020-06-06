import React, { Component } from 'react'
import "./App.css"

export default class PartPage extends Component {
    constructor(props) {
        super(props)
    }

    handleChange2 = (e) => {
        this.props.change(e)
    }

    render() {
        return (
            <div className="typePage secondPage">
                <div>
                    <h1>{this.props.activity}</h1>
                    <p>type: {this.props.type}</p>
                    <div>
                    
                    <select onChange={this.handleChange2}>
                        <option value='0'></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>

            </div>
            </div>
        )
    }
}
