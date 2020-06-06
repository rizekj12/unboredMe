import React, { Component } from 'react'
import "./App.css"
import { Link } from "react-router-dom"
import Panda from "./boredpanda.gif"


export default class Header extends Component {
    render() {
        return (
            
            <div className="headerDiv" >
                <img className="panda" src={Panda} alt="bored panda"/>
                <Link to="/">
                <h1>Un-Bored Me!</h1>
                </Link>
            </div>
        )
    }
}
