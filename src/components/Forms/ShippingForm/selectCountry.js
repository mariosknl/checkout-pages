import React from "react";
import { Field } from "formik";
import countries from "countries-list";

const countryCodes = Object.keys(countries.countries);
const countryNames = countryCodes;
console.log(countryNames);

const CountryList = () => {
  <Field as="select" name="country">
    {countryNames.map((country) => (
      <option value={country}>{country}</option>
    ))}
  </Field>;
};

export default CountryList;
