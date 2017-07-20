export default function(state=null, action) {
    switch(action.type) {
    case 'LOAD_LANDING_PAGE' :
            //return action.payload;
        return Object.assign({}, state, {
            landingPage : action.payload
        });
    case 'ERROR_LANDING_PAGE' :
            //return action.payload;
        return Object.assign({}, state, {
                invalidLogin: action.payload
            });
        
    }
    return state;
} 
	
