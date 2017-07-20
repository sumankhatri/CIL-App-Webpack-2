export default function(state=null, action) {
    switch(action.type) {
    case 'SHOW_INVALID_LOGIN' :    
        return Object.assign({}, state, {
            invalidLogin : action.payload
        });
    case 'ERROR_LANDING_PAGE' :    
        return Object.assign({}, state, {
            invalidLogin : action.payload
        });
    case 'HIDE_INVALID_LOGIN' :
        return Object.assign({}, state, {
            invalidLogin : action.payload
        });    
    }
    return state;
}