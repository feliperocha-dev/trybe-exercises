import { REGISTER } from '../actions';
import { SUBMIT } from '../actions';

const INITIAL_STATE = {
  input: {
    name: '',
    age: '',
    email: '',
  },
  register: [],
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REGISTER: 
      return {
        ...state,
        input: { ...state.input, [action.name]: action.value },
      };
    case SUBMIT: 
      return {
        ...state,
        register: [ ...state.register, { ...state.input } ],
        input: { name: '', email: '', age: '' },
      };
    default:
      return state;
  }
}

export default registerReducer;