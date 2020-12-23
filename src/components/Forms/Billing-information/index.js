import React from "react";

import { BillingOption } from "./BillingOption";
import {
  BillingInformationStyles,
  BillingOptionsStyles,
} from "./billingOptionsStyles";

const BillingInformation = () => {
  return (
    <BillingOptionsStyles>
      <h1>Billing information</h1>
      <BillingInformationStyles>
        <BillingOption />
      </BillingInformationStyles>
    </BillingOptionsStyles>
  );
};

export { BillingInformation };
