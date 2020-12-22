import React from "react";
import { useFormik } from "formik";

import FormField from "../common/FormField";
import validationSchema from "./validationSchema";
import { initialValues } from "./initialValues";
import { ErrorMessage, MultipleInputStyles } from "../common/FormStyles";

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
      <FormField label="Email" type="email" {...emailProps} />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}

      <FormField label="Phone Number" type="text" {...phoneNumberProps} />
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>
      ) : null}

      <MultipleInputStyles>
        <FormField label="First Name" type="text" {...firstNameProps} />
        {formik.touched.firstName && formik.errors.firstName ? (
          <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
        ) : null}

        <FormField label="LastfName" type="text" {...lastNameProps} />
        {formik.touched.lastName && formik.errors.lastName ? (
          <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
        ) : null}
      </MultipleInputStyles>
    </form>
  );
};

export default Form;
