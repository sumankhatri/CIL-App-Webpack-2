import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import TextFieldGroup from '../../../common/textFieldGroup';
import validateInput from '../../../validations/reEnterPwd';
import {connect} from 'react-redux';
import  { bindActionCreators } from 'redux';
import { resetPassword } from '../../../actions/loginActions';
import PwdResetSuccess from './pwdResetSuccess';

class ResetpwdModal extends React.Component {
	constructor (props) {
        super(props);
        this.state = {
        	password: '',
            confirmPassword: '',
            errors: {},
            showModal: false,
            resetPwdError: '' //state for login Modal
        };
        this.closeResetSuccess = this.closeResetSuccess.bind(this);
        this.openResetSuccess = this.openResetSuccess.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }
   
         closeResetSuccess() {
            this.setState({ showModal: false }); // Hide login modal
            
        }
        openResetSuccess() {
        	this.props.hideModal();
            this.setState({ showModal: true }); //Show login modal
             
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
                
                this.props.resetPassword({newpass: this.state.password, confirmpass: this.state.confirmPassword, headers: {
                    'forgotlogin': localStorage.forgotlogin,
                    'Content-Type': 'application/json'
                }});
                this.openResetSuccess();
            }
                /*if (this.isValid()) {
                    this.setState({ errors: {}, isLoading: true });
                    this.props.changePassword({newpass: this.state.password, confirmpass: this.state.confirmPassword})
                        .then((res) => {
                            console.log("data here", res)
                            if(res.data.response.toLowerCase() === "true"){
                                this.setState({ userNameError : "" , username: '', secQuestions : res.data.questions});
                                this.openSecques()
                            }
                            else {
                                this.setState({ userNameError : "Invalid username" });
                            }
                        })
                }*/        
            }
	
    render () {
        const { errors } = this.state;    
        return (
    <div className="modal fade" id="reset-password-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
            <div className="loginmodal-container">
            <Modal show={this.props.showModal} onHide={this.props.hideModal}>
                   <div className="modal-header cil-modal">
                       <h1>Reset Password</h1><span className="fa fa-close cil-close" onClick={this.props.hideModal}></span>
                      <br/>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => this.submit(e)}>
                            {this.state.resetPwdError && <span className="help-block errorLogin">{this.state.resetPwdError}</span>}
                            <TextFieldGroup
                                error={errors.password}
                                label="Please enter new password"
                                onChange={this.onChange}
                                value={this.state.password}
                                field="password"
                                type="password"
                            />
                            <TextFieldGroup
                                error={errors.confirmPassword}
                                label="Re-enter your new password"
                                onChange={this.onChange}
                                value={this.state.confirmPassword}
                                field="confirmPassword"
                                type="password"
                            />                           
                           <input type="submit" name="login" className="login loginmodal-submit" value="Reset Password" onClick={(e) => this.submit(e)}/>
                        </form>
                    </div>
                          
                </Modal> 
            </div>
            <PwdResetSuccess showModal={this.state.showModal} hideModal={this.closeResetSuccess}/>
    </div>
  );
    
   }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({resetPassword: resetPassword}, dispatch);
}

export default connect(null, matchDispatchToProps)(ResetpwdModal);