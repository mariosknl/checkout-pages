import { boolean, date, object, string } from "yup";

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
  postalCode: string().min(5).max(5).required("This field is mandatory"),
  country: string().required("This field is mandatory"),
  city: string().required("This field is mandatory"),
  state: string().required("This field is mandatory"),
  cardHolder: string().required("Name in the card please"),
  cardNumber: string()
    .required("Credit card number is required")
    .matches(/^[0-9]{16}$/, "Credit card number must be 16 digits"),
  expirationDate: date()
    .required("Credit card expiration date is required")
    .min(new Date(), "Credit card is expired"),
  cvv: string().min(3).max(3).required("CVC is required"),
  terms: boolean().required(
    "You have to accept the terms before submitting your order."
  ),
});
