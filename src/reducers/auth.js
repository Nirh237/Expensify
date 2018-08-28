
export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
        return {
            uid: action.uid,
        };
        case 'LOGOUT':
        return {};

      case 'ERROR':
        return {
          msg:action.msg
        };
      default:
        return state;
    }
};