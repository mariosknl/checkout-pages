import React from "react";

import { Checkbox } from "../common";
import { BillingOptionsStyles } from "../../styles";

export const ShippingOptionsForm = ({
  checked,
  handleCheck,
  shippingAddress,
  shippingDifAddress,
  type,
}) => {
  return (
    <BillingOptionsStyles>
      <p>
        Please provide us with your billing information, so we can send you an
        invoice after order confirmation.
      </p>
      <Checkbox
        checked={checked}
        id={shippingAddress}
        name={shippingAddress}
        type={type}
        value={shippingAddress}
        onClick={handleCheck}
      >
        Use my shipping address
      </Checkbox>

      <Checkbox
        checked={checked}
        id={shippingDifAddress}
        name={shippingAddress}
        type={type}
        value={shippingDifAddress}
        onClick={handleCheck}
      >
        Use a different address
      </Checkbox>
    </BillingOptionsStyles>
  );
};
