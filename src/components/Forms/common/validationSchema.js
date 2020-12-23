import * as Yup from "yup";
import valid from "card-validator";

import { expirationDate } from "./expirationDate";

export const validationSchemaForms = Yup.object().shape({
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
  streetAddress: Yup.string().required("Cannot be empty"),
  otherInfo: Yup.string(),
  postalCode: Yup.string().required("Cannot be empty"),
  country: Yup.string().required("Cannot be empty"),
  city: Yup.string().required("Cannot be empty"),
  state: Yup.string().required("Cannot be empty"),
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
