import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ForgotpwdModal from './forgotpwd-modal';
import {connect} from 'react-redux';
import  { bindActionCreators } from 'redux';
import { getUser } from '../../../actions/index';
import { getDashboard } from '../../../actions/dashboardActions';
import { browserHistory } from 'react-router';
import TextFieldGroup from '../../../common/textFieldGroup';
import validateInput from '../../../validations/login';

class LoginModal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {},
      isLoading: false,
      invalid: false,
      loginError: '',
      showModalFpwd: false,
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.closeFpwd = this.closeFpwd.bind(this);
    this.openFpwd = this.openFpwd.bind(this);    
  }  

    closeFpwd() {
      this.setState({ showModalFpwd: false }); //Hide forgot password modal             
    }

    openFpwd() {
      this.props.hideModal();
      this.setState({ showModalFpwd: true}); // show forgot passowrd modal and hide login modal             
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
             this.props.getUser({username: this.state.username, password: this.state.password})
                .then((res) => {                       
                    if(res.data.response.toLowerCase() === 'true'){                        
                        if(localStorage.userlogin) {
                            localStorage.removeItem('userlogin');
                        }                        
                        localStorage.setItem('userlogin', res.data.token);
                        this.props.getDashboard();
                    }
                    else this.setState({ loginError : 'Invalid username or password' });
                })
                .catch((error) => {
                    this.setState({ loginError : error });
                });
         }  return false;     
        
    }
    render () {
        const { errors } = this.state;
        return (
            <div className="modal fade hideLoginModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="loginmodal-container">
                            <Modal show={this.props.showModal} onHide={this.props.hideModal}>
                                
                            <div className="modal-header cil-modal">
                              <h1>Login To Your Account</h1><span className="fa fa-close cil-close" onClick={this.props.hideModal}></span>
                                <br/>
                            </div>                         
                                <div className="modal-body">
                                    <form onSubmit={(e) => this.submit(e)} action="#">
                                        {this.state.loginError && <span className="help-block errorLogin">{this.state.loginError}</span>}
                                        <TextFieldGroup
                                            error={errors.username}
                                            label="Username"
                                            onChange={this.onChange}
                                            value={this.state.username}
                                            field="username"
                                        />                                        
                                        <TextFieldGroup
                                            error={errors.password}
                                            label="Password"
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            field="password"
                                            type="password"
                                        />
                                        <input type="submit" name="login" className="login loginmodal-submit" value="Login"
                                         onClick={(e) => this.submit(e)}
                                        />
                                    </form>
                                </div>
                                <div className="model-footer">
                                    <div className="login-help">                                       
                                       <a data-toggle="modal" data-target="#forgot-password-modal" data-dismiss="modal" href="#" onClick={this.openFpwd}>Forgot Password</a>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <ForgotpwdModal showModal={this.state.showModalFpwd} hideModal={this.closeFpwd}/>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.loginUser,
        dashboard: state.dashboard,
        
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({getUser: getUser, getDashboard: getDashboard}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginModal);
