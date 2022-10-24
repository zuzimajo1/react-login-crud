export const validateEmail = (email) => {
  let atPosition = email.indexOf("@");
  let dotPosition = email.lastIndexOf(".");

  if (atPosition < 1 || dotPosition - atPosition < 2) {
    return true;
  }
};
