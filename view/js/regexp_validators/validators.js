// regexp validators
function validastring(str) {
    if (str.length > 0) {
      var regexp = /^[a-zA-Z0-9]*$/;
      return regexp.test(str);
    }
    return false;
  }
  function validaemail(email) {
    if (email.length > 0) {
      var regexp = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
      return regexp.test(email);
    }
    return false;
  }
  function validaPass(pass) {
    if (pass.length > 0) {
      // from 4 to 16 characters, at least 1 number
      var regexp = /^(?=.*\d).{4,16}$/;
      return regexp.test(pass);
    }
    return false;
  }