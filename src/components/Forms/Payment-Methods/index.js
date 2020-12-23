import React from "react";

import visa from "../../../assets/visa.svg";
import master from "../../../assets/master.svg";
import maestro from "../../../assets/maestro.svg";

import PaymentMethods from "./paymentMethods";
import {
  BannerStyles,
  CardStyles,
  PaymentMethodsStyles,
} from "./paymentMethodsStyles";

const PaymentInformation = () => {
  return (
    <>
      <BannerStyles>
        <p>Pay with credit card</p>
        <CardStyles>
          <img src={visa} alt="visaCard" />
          <img src={master} alt="masterCard" />
          <img src={maestro} alt="maestroCard" />
        </CardStyles>
      </BannerStyles>
      <PaymentMethodsStyles>
        <PaymentMethods />
      </PaymentMethodsStyles>
      <BannerStyles />
    </>
  );
};

export { PaymentInformation };
