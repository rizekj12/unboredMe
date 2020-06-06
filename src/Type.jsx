import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import TypePage from './TypePage'


export default class Type extends Component {
    render() {
        return (
            <>
                <Link to="/type/">
                    <div className="actBox clickBox">
                        <h2>type</h2>
                    </div>
                </Link>
               
            </>

        )
    }
}
