import React, { Component } from 'react'
import './App.css'

export default class RandomActivity extends Component {
    render() {
        return (
            <div className="random">
                <div className="actBox randomBox">
                    <h2 className="featuredtxt">{this.props.activity}</h2>
                    <h4>{this.props.type}</h4>
                    <h2>{this.props.participants}</h2>
                </div>
            </div>
        )
    }
}
