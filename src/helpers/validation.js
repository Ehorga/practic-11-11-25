import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("enter correct email, please")
    .required("required"),
  password: Yup.string().min(6, "must be more 6").max(16).required("required"),
});
