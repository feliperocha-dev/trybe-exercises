import { TYPE_TEXT } from "../actions";

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  residence: '',
  resume: '',
  job: '',
  description: '',
};

const inputFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_TEXT:
      return { ...state, [action.name]: action.input }
    default:
      return state;
  }
}

export default inputFormReducer;
