import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { getContactInfo } from "../../../reducers/contactSlice";
import { getShippingInfo } from "../../../reducers/shippingSlice";
import { getPaymentDetails } from "../../../reducers/paymentSlice";
import { countryNames } from "../common/selectCountryFunc";

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
  FormStyles2,
  MultipleInputStyles,
  PaymentMethodStylesInputs,
  PaymentMethodsStyles,
} from "../../styles";

import { PrimaryButton, SecondaryButton } from "../../ui/Buttons";

import group from "../../../assets/group.png";

const MainForm = () => {
  const [checked, setChecked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    setChecked(true);
  };

  return (
    <>
      {redirect ? <Redirect to="/thanks" /> : ""}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaForms}
        onSubmit={(values) => {
          const {
            email,
            phoneNumber,
            firstName,
            lastName,
            streetAddress,
            otherInfo,
            postalCode,
            city,
            state,
            cardHolder,
            cardNumber,
            expirationDate,
            cvv,
            terms,
          } = values;

          const contactInfo = {
            email,
            phoneNumber,
            firstName,
            lastName,
          };

          const shippingInfo = {
            streetAddress,
            otherInfo,
            postalCode,
            city,
            state,
          };

          const paymentInfo = {
            cardHolder,
            cardNumber,
            expirationDate,
            cvv,
          };
          dispatch(getContactInfo(contactInfo));
          dispatch(getShippingInfo(shippingInfo));
          dispatch(getPaymentDetails(paymentInfo));
          setRedirect(true);
        }}
      >
        <Form>
          {/* Contact Information */}
          <h2>Contact Information</h2>
          <FormStyles>
            <TextInput id="email" label="Email" name="email" type="text" />
            <TextInput
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              type="text"
            />
            <MultipleInputStyles>
              <div>
                <TextInput
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  type="text"
                />
              </div>
              <div>
                <TextInput
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                />
              </div>
            </MultipleInputStyles>
          </FormStyles>

          {/* Shipping Information */}
          <h2>Shipping Address</h2>
          <FormStyles2>
            <TextInput
              id="streetAddress"
              label="Street Address"
              name="streetAddress"
              type="text"
            />
            <TextInput
              id="otherInfo"
              label="Other Information (optional)"
              name="otherInfo"
              type="text"
            />
            <MultipleInputStyles>
              <div>
                <TextInput
                  label="Postal Code"
                  id="postalCode"
                  name="postalCode"
                  type="text"
                />
              </div>

              <SelectCountry label="Country" id="country" name="country">
                {countryNames.map((country) => (
                  <option
                    key={country.name}
                    id={country.name}
                    value={country.name}
                  >
                    {country.name}
                  </option>
                ))}
              </SelectCountry>
            </MultipleInputStyles>
            <MultipleInputStyles>
              <div>
                <TextInput label="City" id="city" name="city" type="text" />
              </div>
              <div>
                <TextInput
                  label="State/Region"
                  id="state"
                  name="state"
                  type="text"
                />
              </div>
            </MultipleInputStyles>
          </FormStyles2>

          {/* Shipping Options */}
          <h2>Billing Information</h2>
          <BillingOptionsStyles>
            <p>
              Please provide us with your billing information, so we can send
              you an invoice after order confirmation.
            </p>
            <Checkbox
              id="shippingAddress"
              name="picked"
              type="radio"
              value="shippingAddress"
              checked={checked}
              onClick={handleCheck}
            >
              Use my shipping address
            </Checkbox>
            <Checkbox
              id="shippingDifAddress"
              name="picked"
              type="radio"
              value="shippingDifAddress"
              checked={checked}
              onClick={handleCheck}
            >
              Use a different address
            </Checkbox>
          </BillingOptionsStyles>

          {/* Payment Methods */}

          <>
            <h2>Payment Methods</h2>
            <BannerStyles>
              <p>Pay with Credit Card</p>
              <CardStyles>
                <img src={group} alt="creditCards" />
              </CardStyles>
            </BannerStyles>
            <PaymentMethodsStyles>
              <TextInput label="Card Holder" name="cardHolder" type="string" />
              <TextInput
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                type="text"
              />
              <PaymentMethodStylesInputs>
                <div>
                  <TextInput
                    id="expirationDate"
                    name="expirationDate"
                    label="Expiration Date"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <TextInput id="cvv" name="cvv" label="CVV" type="text" />
                </div>
              </PaymentMethodStylesInputs>
            </PaymentMethodsStyles>
            <BannerStyles />
          </>

          {/* Terms & Buttons */}

          <FooterStyles>
            <Checkbox name="terms" type="checkbox">
              I agree to the <span>Terms and Conditions</span> and the{" "}
              <span>Privacy Policy</span>
            </Checkbox>
            <ButtonStyles>
              <SecondaryButton modifiers="small">Back</SecondaryButton>
              <PrimaryButton modifiers="large" type="submit">
                Buy Now
              </PrimaryButton>
            </ButtonStyles>
            <p>
              By clicking the button 'Buy Now', I agree to the{" "}
              <span>Terms and Conditions</span> and the{" "}
              <span>Privacy Policy</span>
            </p>
          </FooterStyles>
        </Form>
      </Formik>
    </>
  );
};

export default MainForm;
