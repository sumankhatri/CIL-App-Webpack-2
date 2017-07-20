import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {}; 
    let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  

    if(data.hasOwnProperty('password')) {
        if (Validator.isEmpty(data.password)) {
            errors.password = 'This field is required';
        }
        else if(data.password.length < 8) {
            errors.password = 'Your password must be at least 8 characters';
        }
        else if(!re.test(data.password)) {
            errors.password = 'Your password contains at least one letter, one numberand a special character';
        }       
    }

    if(data.hasOwnProperty('confirmPassword')) {
        if (Validator.isEmpty(data.confirmPassword)) {
            errors.confirmPassword = 'This field is required';
        }
        else if(data.confirmPassword.length < 8) {
            errors.confirmPassword = 'Your password must be at least 8 characters';
        }
        else if(!re.test(data.confirmPassword)) {
            errors.confirmPassword = 'Your password contains at least one letter, one numberand a special character';
        }
        else if (!Validator.equals(data.password, data.confirmPassword)) {
            errors.confirmPassword = 'Passwords must match';
        }
    }
  
    return {
        errors,
        isValid: isEmpty(errors)
    };
}
