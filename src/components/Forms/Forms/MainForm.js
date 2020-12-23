import React from "react";
import { Formik, Form } from "formik";

import {
  Checkbox,
  initialValues,
  TextInput,
  SelectCountry,
  validationSchemaForms,
} from "../common";

import {
  BannerStyles,
  BillingOptionsStyles,
  ButtonStyles,
  CardStyles,
  FooterStyles,
  FormStyles,
  PaymentMethodsStyles,
} from "../../styles";

import { PrimaryButton, SecondaryButton } from "../../ui/Buttons";

import visa from "../../../assets/visa.svg";
import master from "../../../assets/master.svg";
import maestro from "../../../assets/maestro.svg";

const MainForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaForms}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 7));
            setSubmitting(false);
          }, 200);
        }}
      >
        <Form>
          {/* Contact Information */}
          <FormStyles>
            <TextInput label="Email " name="email" type="text" />
            <TextInput label="Phone Number" name="phoneNumber" type="text" />
            <TextInput label="First Name" name="firstName" type="text" />
            <TextInput label="Last Name" name="lastName" type="text" />
          </FormStyles>

          {/* Shipping Information */}
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
            <TextInput label="City" name="city" type="text" />
            <TextInput label="State/Region" name="state" type="text" />
          </FormStyles>

          {/* Shipping Options */}
          <BillingOptionsStyles>
            <Checkbox name="picked" type="radio" value="shippingAddress">
              Use my shipping address
            </Checkbox>
            <Checkbox name="picked" type="radio" value="shippingDifAddress">
              Use a different address
            </Checkbox>
          </BillingOptionsStyles>

          {/* Payment Methods */}
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
              <TextInput label="Card holder" name="cardHolder" type="text" />
              <TextInput
                label="Credit / Debit card number"
                name="cardNumber"
                type="text"
              />
              <TextInput
                label="Expiration Date"
                name="expirationDate"
                type="date"
              />
              <TextInput label="CVV" name="CVV" type="text" />
            </PaymentMethodsStyles>
            <BannerStyles />
          </>

          {/* Terms & Buttons */}

          <FooterStyles>
            <ButtonStyles>
              <SecondaryButton modifiers="small">Back</SecondaryButton>
              <PrimaryButton modifiers="large" type="submit">
                Buy Now
              </PrimaryButton>
            </ButtonStyles>
            <Checkbox name="terms" type="checkbox">
              By clicking the button 'Buy Now', I agree to the{" "}
              <span>Terms and Conditions</span> and the{" "}
              <span>Privacy Policy</span>
            </Checkbox>
          </FooterStyles>
        </Form>
      </Formik>
    </>
  );
};

export default MainForm;
