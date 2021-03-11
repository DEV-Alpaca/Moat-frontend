export const validatePhoneNumber = (phoneNumber) => {
  const isValidatePhoneNumber = /\d{2}[01]\d[0123]\d/.exec(phoneNumber);
  if (
    phoneNumber &&
    isValidatePhoneNumber &&
    phoneNumber === isValidatePhoneNumber[0]
  )
    return true;
  return false;
};
export const validatePassword = (password) => {
  const isValidatePassword = /\d{2}[01]\d[0123]\d/.exec(password);
  if (password && isValidatePassword && password === isValidatePassword[0])
    return true;
  return false;
};

export const validateAuthNumber = (authNumber) => {
  const isValidateAuthNumber = /\d{2}[01]\d[0123]\d/.exec(authNumber);
  if (
    authNumber &&
    isValidateAuthNumber &&
    authNumber === isValidateAuthNumber[0]
  )
    return true;
  return false;
};

export const validateBirthday = (birthday) => {
  const isValidateBirthday = /\d{2}[01]\d[0123]\d/.exec(birthday);
  if (birthday && isValidateBirthday && birthday === isValidateBirthday[0])
    return true;
  return false;
};
