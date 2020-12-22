import React from "react";

import PaymentMethods from "./paymentMethods";
import { BannerStyles, PaymentMethodsStyles } from "./paymentMethodsStyles";

const PaymentInformation = () => {
  return (
    <>
      <BannerStyles>
        <p>Pay with credit card</p>
      </BannerStyles>
      <PaymentMethodsStyles>
        <PaymentMethods />
      </PaymentMethodsStyles>
    </>
  );
};

export default PaymentInformation;
