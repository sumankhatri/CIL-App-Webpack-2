import React from 'react';
import LoginModal from './login/login-modal';


export default class Menu extends React.Component {
   constructor (props) {
        super(props);
        this.state = {
        	showModal: false, //state for login Modal
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
   
         close() {
            this.setState({ showModal: false }); // Hide login modal
            
        }
        open() {            
            this.setState({ showModal: true, showModalResetpwd: false }); //Show login modal
             
        }
      render() {
        return (
    <div>        
   <nav className="navbar navbar-default navbar-fixed-top">
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
                  <li><a href="#about">ABOUT</a></li>
                  <li><a href="#offerings">OFFERINGS</a></li>
                  <li><a href="#success">SUCCESS STORIES</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                  <li><a href="#" data-toggle="modal" onClick={this.open}>LOGIN</a></li>
               </ul>
            </div>
         </div>
      </nav>
      <LoginModal showModal={this.state.showModal} hideModal={this.close}/>
      
      </div>

      );
   }
}     