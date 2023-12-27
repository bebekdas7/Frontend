import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstname: Yup.string().min(3).max(15).required("please enter first name"),
  lastname: Yup.string().min(3).max(10).required("please enter first name"),
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
    ),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
});
