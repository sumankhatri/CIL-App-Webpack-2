import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import TextFieldGroup from '../../../common/textFieldGroup';
import validateInput from '../../../validations/securityQuestions';
import ResetpwdModal from './resetpwd-modal';
export default class SecurityModal extends React.Component {
	constructor (props) {
        super(props);
        this.state = {
            showModalResetpwd:false, 
            errors: {},
            secQuestionOne: '',
            secQuestionTwo: '',
            secQuestionThree: '',
            secQuestionsError : ''
        };
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.closeResetpwd = this.closeResetpwd.bind(this);
        this.openResetpwd = this.openResetpwd.bind(this);
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
           let ques = Object.keys(this.props.secQuestions);
           if(this.props.secQuestions[ques[0]].toLowerCase() === this.state.secQuestionOne.toLowerCase()
                && this.props.secQuestions[ques[1]].toLowerCase() === this.state.secQuestionTwo.toLowerCase()
                && this.props.secQuestions[ques[2]].toLowerCase() === this.state.secQuestionThree.toLowerCase()
           ){
               this.openResetpwd();
           }
           else {
                this.setState({ secQuestionsError : 'Please enter valid data' });
           }
        }     
    }

    closeResetpwd() {
            this.setState({ showModalResetpwd: false }); //Hide Reset password modal             
    }

    openResetpwd() {
        	this.props.hideModal();
            this.setState({ showModalResetpwd: true }); // show Reset password modal and hide Security Ques modal            
    }

    render () {        
        const { errors } = this.state;       
        return (

<div className="modal fade hideSecquesModal" id="security-questions-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="loginmodal-container">
                          {/*      Security Ques Modal     */}
                            <Modal show={this.props.showModal} onHide={this.props.hideModal}>
                              {/*      Security Ques header     */}
                                <div className="modal-header cil-modal">
                                    <h1>Security Questions</h1><span className="fa fa-close cil-close" onClick={this.props.hideModal}></span>
                                    <br />
                                </div>
                                  {/*      Security Ques body     */}
                                <div className="modal-body">
                                    <form onSubmit={(e) => this.submit(e)}>
                                         <p className="secQuestionHead">PLease answer all of the following questions correctly before proceeding.</p>
                                         <TextFieldGroup
                                            error={errors.secQuestionOne}
                                            label= {Object.keys(this.props.secQuestions)[0] ? Object.keys(this.props.secQuestions)[0] : ''}
                                            onChange={this.onChange}
                                            value={this.state.secQuestionOne}
                                            field="secQuestionOne"
                                        /> 
                                        <TextFieldGroup
                                            error={errors.secQuestionTwo}
                                            label={Object.keys(this.props.secQuestions)[1] ? Object.keys(this.props.secQuestions)[1] : ''}
                                            onChange={this.onChange}
                                            value={this.state.secQuestionTwo}
                                            field="secQuestionTwo"
                                        /> 
                                        <TextFieldGroup
                                            error={errors.secQuestionThree}
                                            label={Object.keys(this.props.secQuestions)[2] ? Object.keys(this.props.secQuestions)[2] : ''}
                                            onChange={this.onChange}
                                            value={this.state.secQuestionThree}
                                            field="secQuestionThree"
                                        />

                                        {this.state.secQuestionsError && <span className="help-block errorLogin">{this.state.secQuestionsError}</span>}

                                        <input className="login-input" type="submit" name="continue" className="login loginmodal-submit" value="Continue" onClick={(e) => this.submit(e)}/>
                                    </form>
                                </div>
                                  
                                 
                            </Modal>
                        </div>
                    </div>
                    <ResetpwdModal showModal={this.state.showModalResetpwd} hideModal={this.closeResetpwd}/>
                </div>
                );
            }
        }