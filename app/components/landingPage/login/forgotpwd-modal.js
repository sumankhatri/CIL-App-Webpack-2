import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import { getUser, getUserDetails } from '../../../actions/loginActions';
import {connect} from 'react-redux';
import  { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import TextFieldGroup from '../../../common/textFieldGroup';
import validateInput from '../../../validations/login';
import SecQuestionModal from './secquestion-modal';


class ForgotpwdModal extends React.Component {
constructor (props) {
        super(props);
        this.state = {
            username: '',            
            errors: {},
            isLoading: false,
            invalid: false,
            userNameError: '',
            showModalSecques:false,
            secQuestions: {} //state for login Modal
             
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.closeSecques = this.closeSecques.bind(this);
        this.openSecques = this.openSecques.bind(this);
    }
        closeSecques() {
            this.setState({ showModalSecques: false }); //Hide Security Ques modal
            
        }

        openSecques() {
            this.props.hideModal();
            this.setState({ showModalSecques: true}); // show Security Ques modal and hide forgot password modal     
        }
        
        onChange(e) {
            this.setState({ [e.target.name]: e.target.value });
        }

        isValid() {
            const { errors, isValid } = validateInput(this.state);
             if (!isValid) {
             this.setState({ errors });
            }
        return isValid;
        }

  submit(e) {      
      e.preventDefault();        
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.getUserDetails({username: this.state.username})
                .then((res) => {
                    if(res.data.response.toLowerCase() === 'true'){
                        this.setState({ userNameError : '' , username: '', secQuestions : res.data.questions});
                        if(localStorage.forgotlogin) {
                            localStorage.removeItem('forgotlogin');
                        }                        
                        localStorage.setItem('forgotlogin', res.data.token);
                        this.openSecques();
                    }
                    else {
                        this.setState({ userNameError : 'Invalid username' });
                    }
                });
        }        
    }
       
    render () {
        const { errors } = this.state;
        return (
        <div className="modal fade" id="forgot-password-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
           <div className="modal-dialog">
              <div className="loginmodal-container">
              		<Modal show={this.props.showModal} onHide={this.props.hideModal}>
                 		<div className="modal-header cil-modal">
                    		<h1>Forgot Password</h1><span className="fa fa-close cil-close" onClick={this.props.hideModal}></span>
                    		<br />
                 		</div>
                 		<div className="modal-body">
                    	  <form onSubmit={(e) => this.submit(e)}>
                           {this.state.userNameError && <span className="help-block errorLogin">{this.state.userNameError}</span>}
                                        <TextFieldGroup
                                            error={errors.username}
                                            label="Username"
                                            onChange={this.onChange}
                                            value={this.state.username}
                                            field="username"
                                        />                    
                           <input type="submit" name="continue" className="login loginmodal-submit" value="Continue"  onClick={(e) => this.submit(e)} />
                        </form>
                 		</div>                 		
              		</Modal>
           		</div>
        	</div>
        	<SecQuestionModal showModal={this.state.showModalSecques} hideModal={this.closeSecques} secQuestions={this.state.secQuestions}/>
        	</div>
       );
   }   
    
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getUserDetails: getUserDetails}, dispatch);
}

export default connect(null, matchDispatchToProps)(ForgotpwdModal);

