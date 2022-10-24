export const validateEmail = (email) => {
  let atPosition = email.indexOf("@");
  let dotPosition = email.lastIndexOf(".");

  if (atPosition < 1 || dotPosition - atPosition < 2) {
    return true;
  }
};


export const accessTokenChecker = (name) => {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  } else {
    return false;
  }
};