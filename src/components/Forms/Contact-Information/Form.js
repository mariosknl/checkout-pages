import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormField from "../FormField";

const initialValues = {
  email: "",
  phoneNumber: "",
  firstName: "",
  lastName: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("It needs to be a valid email")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .required("Cannot be empty"),
  phoneNumber: Yup.number()
    .min(
      12,
      "Needs to be at least 12 numbers. Be sure to add your country code in front."
    )
    .positive()
    .integer()
    .required("Cannot be empty"),
  firstName: Yup.string().required("Cannot be empty"),
  lastName: Yup.string().required("Cannot be empty"),
});

const Form = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const emailProps = formik.getFieldProps("email");
  const phoneNumberProps = formik.getFieldProps("phoneNumber");
  const firstNameProps = formik.getFieldProps("firstName");
  const lastNameProps = formik.getFieldProps("lastName");
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField label="email" type="email" name="email" {...emailProps} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <FormField
        label="phoneNumber"
        type="text"
        name="phoneNumber"
        {...phoneNumberProps}
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <div>{formik.errors.phoneNumber}</div>
      ) : null}
      <FormField
        label="firstName"
        type="text"
        name="firstName"
        {...firstNameProps}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <FormField
        label="lastName"
        type="text"
        name="lastName"
        {...lastNameProps}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
    </form>
  );
};

export default Form;
