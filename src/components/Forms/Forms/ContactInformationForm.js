import React from "react";

import { TextInput } from "../common/TextInput";
import {
  FormStyles,
  MultipleInputStyles,
} from "../../styles/FormStyling/FormStyles";

const ContactInformationForm = ({
  email,
  phoneNumber,
  firstName,
  lastName,
}) => {
  return (
    <FormStyles>
      <TextInput id={email} label="Email" name={email} type="email" />
      <TextInput
        id={phoneNumber}
        label="Phone Number"
        name={phoneNumber}
        type="text"
      />
      <MultipleInputStyles>
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
      </MultipleInputStyles>
    </FormStyles>
  );
};

export default ContactInformationForm;

{
  /* <FormStyles>
            <TextInput id="email" label="Email" name="email" type="text" />
            <TextInput
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              type="text"
            />
            <MultipleInputStyles>
              <div>
                <TextInput
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  type="text"
                />
              </div>
              <div>
                <TextInput
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                />
              </div>
            </MultipleInputStyles>
          </FormStyles> */
}
