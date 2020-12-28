import React from "react";

import { countryNames } from "../common/selectCountryFunc";
import { TextInput, SelectCountry } from "../common";
import { FormStyles2 } from "../../styles";

export const ShippingAddressForm = ({
  city,
  country,
  otherInfo,
  postalCode,
  state,
  streetAddress,
}) => {
  return (
    <FormStyles2>
      <TextInput
        id={streetAddress}
        label="Street Address"
        name={streetAddress}
        type="text"
        className="full-width"
      />
      <TextInput
        id={otherInfo}
        label="Other Information (Optional)"
        name={otherInfo}
        type="text"
        className="full-width"
      />
      <div className="dropdown">
        <TextInput
          id={postalCode}
          label="Postal Code"
          name={postalCode}
          type="text"
        />
      </div>

      <div className="dropdown">
        <SelectCountry id={country} label="Country" name="country">
          <option value="">Select Country</option>
          {countryNames.map((country) => (
            <option key={country.name} id={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </SelectCountry>
      </div>
      <div className="dropdown">
        <TextInput id={city} name={city} label="City" type="text" />
      </div>
      <div className="dropdown">
        <TextInput id={state} name={state} label="State/Region" type="text" />
      </div>
    </FormStyles2>
  );
};
