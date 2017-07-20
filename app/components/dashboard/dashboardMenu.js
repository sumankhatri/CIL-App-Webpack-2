import React from 'react';

export default class DashboardMenu extends React.Component {

    render() {
        return (
           <div>        
            <nav className="navbar navbar-default navbar-fixed-top cilFont">
                    <div className="container-fluid mainLogo">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand landing" href="#myPage"><img src={require("../../assets/images/logo.jpg")}></img></a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a className="dash-menu-adjust cilFont" href="#">Dashboard</a></li>                            
                            </ul>
                        </div>
                    </div>
                </nav>      
            </div>
        );
    }

    
}
