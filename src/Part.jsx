import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Part extends Component {
    render() {
        return (
            <Link to="/participants/">
                <div className="actBox clickBox">
                    <h2>Participants</h2>
                </div>
            </Link>
        )
    }
}
