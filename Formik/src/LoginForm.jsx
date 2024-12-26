import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import FormikControl from "./components/FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    password: Yup.string().required("Required!"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                autoComplete="username"
              />

              <button type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
