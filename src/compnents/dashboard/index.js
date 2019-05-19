import React, { Component } from 'react';
// import Header from "../commoncomponent/header";
import { NavLink } from "react-router-dom";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
         <div className="back-btn-header" >
            <NavLink to={'/dashboard'}>
                      <div className="res-back-btn">
                          <div className="res-back-button">
                           <img src={require('../../assets/images/arrow-left.svg')} alt=""/>
                          </div>
                      </div>
            </NavLink>
            <div className="vedio-header">
                        <h1>Administration</h1>
                        <h2>Dashboard</h2>
            </div>
         </div>

          <div className="video-content">
                    <div className="dashboard-content">
                       <div className="row">
                           <div className="col-sm-6">
                           <div className="cards">
                              <h5>56</h5>
                              <p>NUMBERS OF WEBCAST</p>
                           </div>
                           </div>
                           <div className="col-sm-6">
                           <div className="cards">
                              <h5>42</h5>
                              <p>NUMBERS OF QUESTIONS ASKED</p>
                           </div>
                           </div>
                           <div className="col-sm-4">
                           <div className="cards">
                              <h5>15min</h5>
                              <p>AVERAGE DURATION <br/>OF WEBCAST</p>
                           </div>
                           </div>
                           <div className="col-sm-4">
                           <div className="cards">
                              <h5>27</h5>
                              <p>AVERAGE QUESTIONS <br/> SENT</p>
                           </div>
                           </div>
                           <div className="col-sm-4">
                           <div className="cards">
                              <h5>14</h5>
                              <p>AVERAGE QUESTIONS <br/>REJECTED</p>
                           </div>
                           </div>
                       </div>
                    </div>
                       
                </div>
        
      </div>
    );
  }
}
export default Dashboard;
