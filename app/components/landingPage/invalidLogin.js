import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';



export default class InvalidLogin extends React.Component {
    
   constructor() {
      super();      
	
      this.close = this.close.bind(this);
   }
    close () {
        this.refs.modal.hide();
    }
    render () {
         
    return (
    <div className="modal fade" id="reset-password-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
            <div className="loginmodal-container">
            <Modal show={this.props.showModal} onHide={this.props.close} ref="modal">
                   <div className="modal-header cil-modal">
                       <h1>{this.props.heading}</h1><span className="fa fa-close cil-close" onClick={this.props.close}></span>
                      <br/>
                    </div>
                    <div className="modal-body invalid-text">
                        {this.props.error}
                    <input type="button" name="login" className="login loginmodal-submit" value="Close"
                                         onClick={this.props.close}
                                        />  
                    </div>
                        
                </Modal> 
            </div>
            
    </div>
  );
    
   }
}

