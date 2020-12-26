import React from "react";

import { TextInput } from "../common/TextInput";
import { FormStyles } from "../../styles/FormStyling/FormStyles";

export const ContactInformationForm = ({
  email,
  phoneNumber,
  firstName,
  lastName,
}) => {
  return (
    <FormStyles>
      <TextInput
        id={email}
        label="Email"
        name={email}
        type="email"
        className="full-width"
      />
      <TextInput
        id={phoneNumber}
        label="Phone Number"
        name={phoneNumber}
        type="text"
        placeholder="CCxxxxxxxxxx"
        className="full-width"
      />

      <div>
        <TextInput
          id={firstName}
          label="First Name"
          name={firstName}
          type="text"
        />
      </div>
      <div>
        <TextInput
          id={lastName}
          label="Last Name"
          name={lastName}
          type="text"
        />
      </div>
    </FormStyles>
  );
};
