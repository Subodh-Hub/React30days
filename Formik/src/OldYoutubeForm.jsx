import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "Subodh",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is Required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Channel is Required";
  }
  return errors;
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

function OldYoutubeForm() {
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  //   console.log("Form values", formik.values);
  //   console.log("Form errors", formik.errors);
  console.log("Visited field", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;
