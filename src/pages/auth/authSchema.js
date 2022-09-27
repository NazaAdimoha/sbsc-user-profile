import * as yup from "yup";

export const authSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
        "Must Contain at least 8 Characters, 1 letter or 1 number and 1 special character"
      ),
  })
  .required();