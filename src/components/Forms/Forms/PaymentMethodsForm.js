import React from "react";

import { TextInput } from "../common";
import {
  BannerStyles,
  CardStyles,
  PaymentMethodsStyles,
  PaymentMethodStylesInputs,
} from "../../styles";
import group from "../../../assets/group.png";

export const PaymentMethodsForm = ({
  cardHolder,
  cardNumber,
  cvv,
  expirationDate,
}) => {
  return (
    <>
      <BannerStyles>
        <p>Pay with Credit Card</p>
        <CardStyles>
          <img src={group} alt="creditCards" />
        </CardStyles>
      </BannerStyles>
      <PaymentMethodsStyles>
        <TextInput
          id={cardHolder}
          label="Card Holder"
          name={cardHolder}
          type="text"
        />
        <TextInput
          id={cardNumber}
          label="Card Number"
          name={cardNumber}
          type="text"
        />
        <PaymentMethodStylesInputs>
          <div>
            <TextInput
              id={expirationDate}
              label="Expiration Date"
              name={expirationDate}
              placeholder="MM/YY"
              type="text"
            />
          </div>
          <div>
            <TextInput
              id={cvv}
              label="CVV"
              name={cvv}
              type="text"
              className="cvv"
            />
          </div>
        </PaymentMethodStylesInputs>
      </PaymentMethodsStyles>
      <BannerStyles />
    </>
  );
};
