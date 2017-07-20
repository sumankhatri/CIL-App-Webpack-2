export default function(state = null, action) {
    switch (action.type) {
    case 'GET_DASHBOARD':
            //return action.payload;
            return Object.assign({}, state, {
                dashboard: action.payload
            });
        case 'OPINION_POLL_SUBMITTED':
            //return action.payload;
            return Object.assign({}, state, {
                dashboard: Object.assign({}, state.dashboard, {
                    polling_result: action.payload
                })
            });
        case 'LOGIN_SESSION_EXPIRED':
            //return action.payload;
            return Object.assign({}, state, {
                invalidLogin: action.payload
            });
    }
    return state;
}