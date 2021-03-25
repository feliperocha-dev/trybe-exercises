import { LOGON } from "../actions"

const INITIAL_STATE = {
  user: '',
  password: '',
}

const logonReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGON: 
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export default logonReducer;