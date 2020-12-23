import React from "react";
import { useFormik } from "formik";

import {
  ErrorMessage,
  FormField,
  initialValuesPayment,
  MultipleInputStyles,
  validationSchemaPayment,
} from "../common";

const PaymentMethods = ({ onSubmit }) => {
  const formik = useFormik({
    initialValuesPayment,
    validationSchemaPayment,
    onSubmit,
  });

  const cardHolderProps = formik.getFieldProps("cardHolder");
  const cardNumberProps = formik.getFieldProps("cardNumber");
  const expirationDateProps = formik.getFieldProps("expirationDate");
  const CVVProps = formik.getFieldProps("CVV");

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField label="Card holder" type="text" {...cardHolderProps} />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}

      <FormField
        label="Credit / Debit card number"
        type="text"
        {...cardNumberProps}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}

      <MultipleInputStyles>
        <FormField
          label="Expiration date"
          type="string"
          placeholder="MM/YY"
          {...expirationDateProps}
        />
        {formik.touched.expirationDate && formik.errors.expirationDate ? (
          <ErrorMessage>{formik.errors.expirationDate}</ErrorMessage>
        ) : null}

        <FormField label="CVV" type="number" {...CVVProps} />
        {formik.touched.CVV && formik.errors.CVV ? (
          <ErrorMessage>{formik.errors.CVV}</ErrorMessage>
        ) : null}
      </MultipleInputStyles>
    </form>
  );
};

export default PaymentMethods;
