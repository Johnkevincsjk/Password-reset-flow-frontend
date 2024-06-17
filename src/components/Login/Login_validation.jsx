import * as Yup from "yup"

const Login_val = Yup.object({
    Mailid: Yup.string().email("Enter valid mail id").required("Enter mail id")
})





export default  Login_val