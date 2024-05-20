import * as Yup from "yup";

export const signupschema = Yup.object({
    fname: Yup.string().min(2 , " First Name must have 2 charecter ").max(25).required("Please Enter Your First Name"),
    lname: Yup.string().min(0).max(25).required("Please Enter Your Last Name"),
    gender: Yup.string().required("Please Enter Your Gender"),
    city: Yup.string().min(2).max(25).required("Please Enter Your City"),
    state: Yup.string().min(2).max(25).required("Please Enter Your State"),
    email: Yup.string().email().required("Please Enter Your Email"),

    // FOR PASSWORDS
    // password: Yup.string().min(6).required("Please Enter Your Password"),
    // confirm_password: Yup.string().required().oneOf([Yup.ref('password), null], "Password must match"),
})