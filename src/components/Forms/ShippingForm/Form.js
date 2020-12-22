import React from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";

import FormField from "../FormField";

const initialValues = {
  streetAddress: "",
  otherInfo: "",
  postalCode: "",
  country: "",
  city: "",
  state: "",
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Cannot be empty"),
  otherInfo: Yup.string(),
  postalCode: Yup.string().required("Cannot be empty"),
  country: Yup.string().required("Cannot be empty"),
  city: Yup.string().required("Cannot be empty"),
  state: Yup.string().required("Cannot be empty"),
});

const Form = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const streetAddressProps = formik.getFieldProps("streeAddress");
  const otherInfoProps = formik.getFieldProps("otherInfo");
  const postalCodeProps = formik.getFieldProps("postalCode");
  const countryProps = formik.getFieldProps("country");
  const cityProps = formik.getFieldProps("city");
  const stateProps = formik.getFieldProps("state");
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField
        label="Street Address"
        type="text"
        name="streetAddress"
        {...streetAddressProps}
      />
      {formik.touched.streetAddress && formik.errors.streetAddress ? (
        <div>{formik.errors.streetAddress}</div>
      ) : null}

      <FormField
        label="Other Information (optional)"
        type="text"
        name="otherInfo"
        {...otherInfoProps}
      />
      {formik.touched.otherInfo && formik.errors.otherInfo ? (
        <div>{formik.errors.otherInfo}</div>
      ) : null}

      <FormField
        label="Postal Code"
        type="text"
        name="postalCode"
        {...postalCodeProps}
      />
      {formik.touched.postalCode && formik.errors.postalCode ? (
        <div>{formik.errors.postalCode}</div>
      ) : null}

      <FormField label="Country" type="select" name="state" {...stateProps} />
      {formik.touched.state && formik.errors.state ? (
        <div>{formik.errors.state}</div>
      ) : null}

      <FormField
        label="State/Region/Province"
        type="text"
        name="state"
        {...stateProps}
      />
      {formik.touched.state && formik.errors.state ? (
        <div>{formik.errors.state}</div>
      ) : null}

      <FormField
        label="Postal Code"
        type="text"
        name="postalCode"
        {...postalCodeProps}
      />
      {formik.touched.postalCode && formik.errors.postalCode ? (
        <div>{formik.errors.postalCode}</div>
      ) : null}
    </form>
  );
};

export default Form;
