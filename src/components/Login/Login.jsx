import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { signInSchema } from "../../helpers/validation";



const Login = () => {
  const navigate = useNavigate()
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
    navigate('/')
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
      validateOnMount
    >
      {(formikProps) => {
       

        return (
          <Form className={styles.form}>
            <label>
              <span>email:</span>
              <Field type="email" name="email" />
            </label>
            <label>
              <span>password</span>
              <Field type="password" name="password" />
            </label>

            <input
              type="submit"
              value="sign in"
              disabled={!formikProps.isValid || formikProps.isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
