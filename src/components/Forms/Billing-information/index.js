import React from "react";

import { BillingOption } from "./BillingOption";
import {
  BillingInformationStyles,
  ShippingOptionsStyles,
} from "./shippingOptionsStyles";

const BillingInformation = () => {
  return (
    <BillingInformationStyles>
      <h1>Billing information</h1>
      <ShippingOptionsStyles>
        <BillingOption />
      </ShippingOptionsStyles>
    </BillingInformationStyles>
  );
};

export { BillingInformation };
