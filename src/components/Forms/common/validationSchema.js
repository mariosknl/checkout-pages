import * as Yup from "yup";

export const validationSchemaForms = Yup.object({
  email: Yup.string()
    .email("It needs to be a valid email")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    .required("This field is mandatory"),
  phoneNumber: Yup.number()
    .min(
      12,
      "Needs to be at least 12 numbers. Be sure to add your country code"
    )
    .integer()
    .required("This field is mandatory"),
  firstName: Yup.string().required("This field is mandatory"),
  lastName: Yup.string().required("This field is mandatory"),
  streetAddress: Yup.string().required("This field is mandatory"),
  otherInfo: Yup.string(),
  postalCode: Yup.string().required("This field is mandatory"),
  country: Yup.string().required("This field is mandatory"),
  city: Yup.string().required("This field is mandatory"),
  state: Yup.string().required("This field is mandatory"),
});
