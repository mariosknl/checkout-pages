import React from "react";

import { BillingOptionsStyles } from "./billingOptionsStyles";
import { Input } from "../../ui/Input";

const BillingOption = () => {
  return (
    <>
      <BillingOptionsStyles>
        <p>
          Please provide us with your billing information, so we can send you an
          invoice after order confirmation.
        </p>

        <Input
          id="shippingAddress"
          type="radio"
          name="shippingAddress"
          value="shippingAddress"
          label="Use my shipping address"
        />

        <Input
          id="differentAddress"
          type="radio"
          name="differentAddress"
          value="differentAddress"
          label="Use a different shipping address"
        />
      </BillingOptionsStyles>
    </>
  );
};

export { BillingOption };
