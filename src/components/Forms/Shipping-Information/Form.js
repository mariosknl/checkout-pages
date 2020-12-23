import React from "react";
import { useFormik } from "formik";

import {
  ErrorMessage,
  FormField,
  initialValuesShipping,
  MultipleInputStyles,
  validationSchemaShipping,
} from "../common";
import selectCountry from "./selectCountry";

const Form = ({ onSubmit }) => {
  const formik = useFormik({
    initialValuesShipping,
    validationSchemaShipping,
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
      <FormField label="Street Address" type="text" {...streetAddressProps} />
      {formik.touched.streetAddress && formik.errors.streetAddress ? (
        <ErrorMessage>{formik.errors.streetAddress}</ErrorMessage>
      ) : null}

      <FormField
        label="Other Information (optional)"
        type="text"
        {...otherInfoProps}
      />
      {formik.touched.otherInfo && formik.errors.otherInfo ? (
        <ErrorMessage>{formik.errors.otherInfo}</ErrorMessage>
      ) : null}

      <MultipleInputStyles>
        <FormField label="Postal Code" type="text" {...postalCodeProps} />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <ErrorMessage>{formik.errors.postalCode}</ErrorMessage>
        ) : null}

        <FormField
          label="Country"
          type="text"
          name="country"
          {...countryProps}
        />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <ErrorMessage>{formik.errors.postalCode}</ErrorMessage>
        ) : null}
      </MultipleInputStyles>

      <MultipleInputStyles>
        <FormField label="City" type="text" {...cityProps} />
        {formik.touched.city && formik.errors.city ? (
          <ErrorMessage>{formik.errors.city}</ErrorMessage>
        ) : null}

        <FormField label="State/Region/Province" type="text" {...stateProps} />
        {formik.touched.state && formik.errors.state ? (
          <ErrorMessage>{formik.errors.state}</ErrorMessage>
        ) : null}
      </MultipleInputStyles>
    </form>
  );
};

export default Form;
