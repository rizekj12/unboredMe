import React, { Component } from 'react'
import axios from "axios"
import './App.css'
import Header from "./Header"
import RandomActivity from "./RandomActivity"
import Type from "./Type"
import Part from './Part'
import Create from './Create/Create'
import Footer from "./Footer"
import { Route } from "react-router-dom"
import TypePage from './TypePage'
import PartPage from './PartPage'
import CreatePage from "./Create/CreatePage"




export default class App extends Component {

  state = {
    activityMain: [],
    typeMain: [],
    partMain: [],
    typeActivity: [],
    typePart: [],
    participants: [],
    partType: [],
    featuredActivity: null,
  }


  componentDidMount = async () => {
    this.getRandom()
    
  }



  handleChange = async (e) => {
    let typeV = e.target.value
    const response2 = await axios.get(`http://www.boredapi.com/api/activity?type=${e.target.value}`)
    this.setState({

      typeActivity: response2.data.activity,
      typePart: response2.data.participants
    })

  }

  handleChange2 = async (e) => {
    let typeP = e.target.value
    const response3 = await axios.get(`http://www.boredapi.com/api/activity?participants=${e.target.value}`)
    this.setState({

      participants: response3.data.activity,
      partType: response3.data.type
    })

  }

  saveActivity = (feature) => {
    this.setState({
      featuredActivity: feature,
    })

  }

  getRandom = async () =>{
    const response = await axios.get('https://www.boredapi.com/api/activity/')

    this.setState({
      activityMain: response.data.activity,
      typeMain: response.data.type,
      partMain: response.data.participants
    })
  }

  render() {

    return (
      <>
        <Header />

        <div className="main">
          <Route path="/" exact>
           
           <RandomActivity activity={this.state.activityMain} type={this.state.typeMain} participants={this.state.partMain} />
           <button onClick={this.getRandom}>Random!</button>
              <h2 className="searchtxt"><span>Search by</span></h2>
              <div className="middle">
                <Type />
                <Part />
                <Create />
              </div>
              {this.state.featuredActivity &&
               <div>
               <h2><span>Featured Activity</span></h2>
                <div className='actBox featured'>
                  <h2 className="featuredtxt">{this.state.featuredActivity.newActivity}</h2>
                  <h3>{this.state.featuredActivity.typeOf}</h3>
              <h2>{this.state.featuredActivity.numOfPart}</h2>
                </div>
                </div>} 
          </Route>
          <Route path="/type/" exact>
            <TypePage activity={this.state.typeActivity} participants={this.state.typePart} change={this.handleChange} />
          </Route>
          <Route path="/participants/" exact>
            <PartPage activity={this.state.participants} type={this.state.partType} change={this.handleChange2} />
          </Route>
          <Route path="/create/" exact>
            <CreatePage change={this.saveActivity} />
          </Route>
        </div>  
          <Footer />
          
      </>

    )
  }
}

