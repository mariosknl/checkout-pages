import { boolean, object, string } from "yup";
import valid from "card-validator";

export const validationSchemaForms = object({
  email: string()
    .email("It needs to be a valid email")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .required("This field is mandatory"),
  phoneNumber: string()
    .matches(
      /^[0-9]{12}$/,
      "Phone number must be 12 digits. Add your country code."
    )
    .required("This field is mandatory"),
  firstName: string().required("This field is mandatory"),
  lastName: string().required("This field is mandatory"),
  streetAddress: string().required("This field is mandatory"),
  otherInfo: string(),
  postalCode: string().test(
    "postal-code",
    "Postal code is invalid.",
    (value) => valid.postalCode(value).isValid
  ),
  country: string().required("This field is mandatory"),
  city: string().required("This field is mandatory"),
  state: string().required("This field is mandatory"),
  cardHolder: string().required("Name in the card please"),
  cardNumber: string()
    .test(
      "test-number",
      "Credit Card Number is invalid. Must be 16 digits",
      (value) => valid.number(value).isValid
    )
    .required(),
  expirationDate: string().test(
    "expiration-date",
    "Credit Card is expired",
    (value) => valid.expirationDate(value).isValid
  ),
  cvv: string().test(
    "cvv-nunber",
    "CVV is invalid. Must be 3 digits.",
    (value) => valid.cvv(value).isValid
  ),
  terms: boolean()
    .required("You must accept terms and conditions.")
    .oneOf([true], "You must accept the terms and conditions."),
});
