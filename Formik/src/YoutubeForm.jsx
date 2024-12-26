import React from "react";
import {
  useFormik,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./components/TextError";
const initialValues = {
  name: "Subodh",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phone: ["", ""],
  cars: [""],
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function YoutubeForm() {
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  //   console.log("Form values", formik.values);
  //   console.log("Form errors", formik.errors);
  //   console.log("Visited field", formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    //   validateOnChange={false}
    //   validateOnBlur={false}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <Field
            type="text"
            id="comment"
            name="comment"
            validate={validateComments}
          />
          <ErrorMessage name="comment" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <FastField type="text" id="address" name="address">
            {(props) => {
              console.log("Field render");
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </FastField>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <label htmlFor="twitter">Twitter Profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type="text" id="primaryPh" name="phoneNumber[0]" />
          <label htmlFor="secondaryPh">Secondary Phone Number</label>
          <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
        </div>

        <div className="form-control">
          <label>List of Cars: </label>
          <FieldArray name="cars">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { cars } = values;
              console.log("formik error", form.errors);
              return (
                <div>
                  {cars.map((car, index) => (
                    <div key={index}>
                      <Field name={`cars[${index}]`} />
                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
