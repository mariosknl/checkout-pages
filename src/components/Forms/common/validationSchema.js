import * as Yup from "yup";
import valid from "card-validator";

import { expirationDate } from "./expirationDate";

const validationSchemaContact = Yup.object().shape({
  email: Yup.string()
    .email("It needs to be a valid email")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .required("Cannot be empty"),
  phoneNumber: Yup.number()
    .min(
      12,
      "Needs to be at least 12 numbers. Be sure to add your country code in front."
    )
    .integer()
    .required("Cannot be empty"),
  firstName: Yup.string().required("Cannot be empty"),
  lastName: Yup.string().required("Cannot be empty"),
});

const validationSchemaShipping = Yup.object().shape({
  streetAddress: Yup.string().required("Cannot be empty"),
  otherInfo: Yup.string(),
  postalCode: Yup.string().required("Cannot be empty"),
  country: Yup.string().required("Cannot be empty"),
  city: Yup.string().required("Cannot be empty"),
  state: Yup.string().required("Cannot be empty"),
});

const validationSchemaPayment = Yup.object().shape({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string()
    .test(
      "test-number",
      "Credit Card Number is invalid",
      (value) => valid.number(value).isValid
    )
    .required(),
  expirationData: expirationDate,
  CVV: Yup.number().min(3).max(3).integer().required("Cannot be empty"),
});

export {
  validationSchemaContact,
  validationSchemaPayment,
  validationSchemaShipping,
};
