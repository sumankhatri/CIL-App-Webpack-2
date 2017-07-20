import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    //if(data.hasOwnProperty("secQuestionOne")) {
    if (Validator.isEmpty(data.secQuestionOne)) {
        errors.secQuestionOne = 'This field is required';
    }
    /*else if(!Validator.isAlphanumeric(data.secQuestionOne)) {
        errors.secQuestionOne = 'Please enter alphabets!!';
    }*/
    // }

    // if(data.hasOwnProperty("password")) {
    if (Validator.isEmpty(data.secQuestionTwo)) {
        errors.secQuestionTwo = 'This field is required';
    }
    /*else if(!Validator.isAlphanumeric(data.secQuestionTwo)) {
        errors.secQuestionTwo = 'Please enter alphabets!!';
    }*/
    if (Validator.isEmpty(data.secQuestionThree)) {
        errors.secQuestionThree = 'This field is required';
    }
    /*else if(!Validator.isAlphanumeric(data.secQuestionThreef)) {
        errors.secQuestionThree = 'Please enter alphabets!!';
    }*/
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
