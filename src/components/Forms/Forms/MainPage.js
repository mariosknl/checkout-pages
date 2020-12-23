import React from "react";
import { Formik, Form } from "formik";

import {
  BillingInformation,
  ContactInformation,
  PaymentInformation,
  ShippingForm,
} from "../index";

import { validationSchemaContact } from "../common/validationSchema";
import { FormStyles } from "../common";
import { Checkbox } from "../common/Checkbox";
import { BillingOptionsStyles } from "../Billing-Information/billingOptionsStyles";
import { TextInput } from "../common/TextInput";
import { SelectCountry } from "../common/SelectCountry";
import {
  BannerStyles,
  CardStyles,
  PaymentMethodsStyles,
} from "../Payment-Methods/paymentMethodsStyles";
import PaymentMethods from "../Payment-Methods/paymentMethods";

const MainPage = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={validationSchemaContact}
      >
        <Form>
          <FormStyles>
            <TextInput label="Email " name="email" type="text" />
            <TextInput label="Phone Number" name="phoneNumber" type="text" />
            <TextInput label="First Name" name="firstName" type="text" />
            <TextInput label="Last Name" name="lastName" type="text" />
          </FormStyles>

          <FormStyles>
            <TextInput
              label="Street Address"
              name="streetAddress"
              type="text"
            />
            <TextInput
              label="Other Information (optional)"
              name="otherInfo"
              type="text"
            />
            <TextInput label="Postal Code" name="postalCode" type="text" />
            <SelectCountry label="Country" name="country">
              <option value="">Select Country</option>
              <option value="italy">Italy</option>
              <option value="greece">Greece</option>
            </SelectCountry>
            <TextInput label="Last Name" name="lastName" type="text" />
          </FormStyles>

          <BillingOptionsStyles>
            <Checkbox name="shippingAddress">Use my shipping address</Checkbox>
            <Checkbox name="shippingDifAddress">
              Use a different address
            </Checkbox>
          </BillingOptionsStyles>

          <>
            <BannerStyles>
              <p>Pay with credit card</p>
              <CardStyles>
                {/* <img src={visa} alt="visaCard" />
          <img src={master} alt="masterCard" />
          <img src={maestro} alt="maestroCard" /> */}
              </CardStyles>
            </BannerStyles>
            <PaymentMethodsStyles>
              <PaymentMethods />
            </PaymentMethodsStyles>
            <BannerStyles />
          </>
        </Form>
      </Formik>
    </>
  );
};

export default MainPage;
