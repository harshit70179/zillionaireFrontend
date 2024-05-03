import {
    Emailpattern,
    Namepattern,
    Mobilepattern,
} from "../pattern/Pattern";

export const checkoutValid = (name, value, id) => {
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
    if (name === "mobileNumber") {
        if (value === "") {
            error = "This field is required";
            return error;
        }
        if (!Mobilepattern.test(value)) {
            error = "Please enter  valid mobile number";
            return error;
        }
        return error;
    }
    if (name === "address") {
        if (!id) {
            if (value === "") {
                error = "This field is required";
                return error;
            }
        }
        return error;
    }
};
