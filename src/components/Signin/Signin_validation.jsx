import * as Yup from 'yup'


const Sign_val = Yup.object({
    Full_name: Yup.string().required("Enter full-name"),
    Mailid: Yup.string().email("Enter valid mail id").required("Enter mail id"),
    Password: Yup.string().required("Enter password")
})


export default Sign_val