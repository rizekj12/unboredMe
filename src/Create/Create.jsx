import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Create extends Component {
    render() {
        return (
            <Link to="/create/">
                <div className="actBox clickBox">
                    <h2>Create your own activity!</h2>
                </div>
            </Link>
        )
    }
}
