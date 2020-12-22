import React from "react";

import PaymentMethods from "./paymentMethods";
import { PaymentMethodsStyles } from "./paymentMethodsStyles";

const PaymentInformation = () => {
  return (
    <PaymentMethodsStyles>
      <PaymentMethods />
    </PaymentMethodsStyles>
  );
};

export default PaymentInformation;
