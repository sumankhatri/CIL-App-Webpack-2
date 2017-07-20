import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    if(data.hasOwnProperty('username')) {
        if (Validator.isEmpty(data.username)) {
            errors.username = 'This field is required';
        }
    }
  
    if(data.hasOwnProperty('password')) {
        if (Validator.isEmpty(data.password)) {
            errors.password = 'This field is required';
        }
    }
  
    return {
        errors,
        isValid: isEmpty(errors)
    };
}
