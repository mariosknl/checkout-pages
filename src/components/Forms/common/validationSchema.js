import * as Yup from "yup";

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

function formatDate(date) {
  return new Date(date);
}

const validationSchemaPayment = Yup.object().shape({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.number()
    .min(16, "Needs to be 16 digits")
    .integer()
    .required("Cannot be empty"),
  expirationData: Yup.date().min(
    Yup.ref("expirationDate"),
    ({ min }) => "MM/YY"
  ),
});

export { validationSchemaContact, validationSchemaShipping };
