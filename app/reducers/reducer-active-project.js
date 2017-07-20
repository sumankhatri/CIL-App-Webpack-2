export default function(state=null, action) {
    switch(action.type) {
        case 'PROJECT_SELECTED' :
            //return action.payload;
            return Object.assign({}, state, {
                activeProject : action.payload
            });
    }
    return state;
}