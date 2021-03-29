export const LOGON = 'LOGON';
export const REGISTER = 'REGISTER';
export const SUBMIT = 'SUBMIT';

export const logon = (value, name) => ({
  type: LOGON,
  value,
  name,
});

export const registerClient  = (value, name) => ({
  type: REGISTER,
  value,
  name,
});

export const submitForm  = (keyOne, keyTwo, keyThree) => ({
  type: SUBMIT,
});
