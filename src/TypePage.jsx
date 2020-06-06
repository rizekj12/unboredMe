import React, { Component } from 'react'
import './App.css'
import App from "./App"



export default class TypePage extends Component {
    constructor(props) {
        super(props)
    }
    
    handleChange = (e) => {
        this.props.change(e)
      }

    render() {
        return (
            <div className="typePage secondPage">
                <h1>{this.props.activity}</h1>
            <p>participants:{this.props.participants}</p>
                <p>type:</p>
               <div>
                <select onChange={this.handleChange}>
                    <option value='0'></option>
                    <option value='recreational'>recreational</option>
                    <option value='busywork'>busywork</option>
                    <option value='social'>social</option>
                    <option value='music'>music</option>
                    <option value='relaxation'>relaxation</option>
                    <option value='cooking'>cooking</option>
                    <option value='education'>education</option>
                    <option value='charity'>charity</option>
                </select>
                </div>
            </div>
        )
    }
}
