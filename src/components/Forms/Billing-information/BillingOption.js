import React from "react";

import { ShippingOptionsStyles } from "./shippingOptionsStyles";
import { Input } from "../../ui/Input";

const BillingOption = () => {
  return (
    <>
      <ShippingOptionsStyles>
        <p>
          Please provide us with your billing information, so we can send you an
          invoice after order confirmation.
        </p>

        <Input
          id="shippingAddress"
          name="shippingAddress"
          value="shippingAddress"
          label="Use my shipping address"
        />

        <Input
          id="differentAddress"
          name="differentAddress"
          value="differentAddress"
          label="Use a different shipping address"
        />
      </ShippingOptionsStyles>
    </>
  );
};

export { BillingOption };
