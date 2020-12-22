import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Cannot be empty"),
  otherInfo: Yup.string(),
  postalCode: Yup.string().required("Cannot be empty"),
  country: Yup.string().required("Cannot be empty"),
  city: Yup.string().required("Cannot be empty"),
  state: Yup.string().required("Cannot be empty"),
});
