import * as Yup from "yup";

export const expirationDate = Yup.string()
  .typeError("Not a valid expiration date. Example: MM/YY")
  .max(5, "Not a valid expiration date. Example: MM/YY")
  .matches(
    /([0-9]{2})\/([0-9]{2})/,
    "Not a valid expiration date. Example: MM/YY"
  )
  .test(
    "test-credit-card-expiration-date",
    "Invalid Expiration Date has past",
    (expirationDate) => {
      if (!expirationDate) {
        return false;
      }

      const today = new Date();
      const monthToday = today.getMonth() + 1;
      const yearToday = today.getFullYear().toString().substr(-2);

      const [expMonth, expYear] = expirationDate.split("/");

      if (Number(expYear) < Number(yearToday)) {
        return false;
      } else if (
        Number(expMonth) < monthToday &&
        Number(expYear) <= Number(yearToday)
      ) {
        return false;
      }
      return true;
    }
  )
  .test(
    "test-credit-card-expiration-date",
    "Invalid Expiration Month",
    (expirationDate) => {
      if (!expirationDate) {
        return false;
      }
      const today = new Date().getFullYear().toString().substr(-2);

      const [expMonth] = expirationDate.split("/");

      if (Number(expMonth) < 12) {
        return false;
      }
      return true;
    }
  )
  .required("Expiration date is required");
