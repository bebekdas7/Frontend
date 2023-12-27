import * as Yup from "yup";

export const paySchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  tel: Yup.number()
    .typeError("Please enter a valid mobile number")
    .integer("Please enter a valid mobile number")
    .positive("Please enter a valid mobile number")
    .test(
      "len",
      "Mobile number must be exactly 10 digits",
      (val) => val && val.toString().length === 10
    )
    .test(
      "starts with",
      "Mobile number should starts with 9, 8, 7 0r 6",
      (val) => val && /^[9876]/.test(val.toString()[0])
    )
    .required("Please enter a mobile number"),
  pincode: Yup.number()
    .typeError("Please enter a valid pincode")
    .integer("Please enter a valid pincode")
    .positive("Please enter a valid pincode")
    .test(
      "len",
      "Pincode must be exactly 6 digits",
      (val) => val && val.toString().length === 6
    )
    .required("please enter a valid pincode"),
  address: Yup.string().min(5).max(50).required("please enter your address"),
  city: Yup.string().min(3).max(15).required("please enter your city"),
});
