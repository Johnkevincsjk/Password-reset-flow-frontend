import * as Yup from 'yup'

const Resetform_val = Yup.object({
    Mailid: Yup.string().email("Enter valid mail id").required("Enter registered mail id")
})


export default Resetform_val