import * as Yup from "yup";

export const signupschema2 = Yup.object({
    name: Yup.string().min(2 , "Name must have 2 character ").max(25).required("Please Enter Your Name"),
    salary: Yup.number().min(0).max(25).required("Please Enter Your Salary"),
    age: Yup.number().required("Please Enter Your age"),
    

    // FOR PASSWORDS
    // password: Yup.string().min(6).required("Please Enter Your Password"),
    // confirm_password: Yup.string().required().oneOf([Yup.ref('password), null], "Password must match"),
})