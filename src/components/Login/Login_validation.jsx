import * as yup from "yup"

const Login_val = yup.object({
    Mailid: yup.string().email("Enter valid mail id").required("Enter mail id"),
    Password: yup.string().required("Enter Password")
})





export default Login_val