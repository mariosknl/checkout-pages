import React from "react";
import { usePaymentInputs } from "react-payment-inputs";

const PaymentInputs = ({ cardNumber, cvv, expirationDate }) => {
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();
  return (
    <div>
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
    </div>
  );
};

export default PaymentInputs;
