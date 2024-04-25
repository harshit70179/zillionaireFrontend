import {
    Emailpattern,
    Namepattern,
    Passwordpattern,
  } from "../pattern/Pattern";
  
  export const RegisterValid = (name, value,id) => {
    let error = "";
    if (name === "email") {
      if (value === "") {
        error = "This field is required";
        return error;
      }
      if (!Emailpattern.test(value)) {
        error = "Please enter  valid email address";
        return error;
      }
      return error;
    }
    if (name === "firstName") {
      if (value === "") {
        error = "This field is required";
        return error;
      }
      if (!Namepattern.test(value)) {
        error = "Please enter  valid first name";
        return error;
      }
      return error;
    }
    if (name === "lastName") {
        if (value === "") {
          error = "This field is required";
          return error;
        }
        if (!Namepattern.test(value)) {
          error = "Please enter  valid last name";
          return error;
        }
        return error;
      }
    if (name === "password") {
      if(!id){
        if (value === "") {
          error = "This field is required";
          return error;
        }
      }
      if (!Passwordpattern.test(value) && value) {
        error = "Please enter  valid password";
        return error;
      }
  
     
      return error;
    }
  };
  