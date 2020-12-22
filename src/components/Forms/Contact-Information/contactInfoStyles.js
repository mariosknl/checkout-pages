import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const FormStyles = styled.form`
  width: 90%;
  padding: 14px;
  margin: 0 auto;
  border: 1px solid ${defaultTheme.borderColor};
  border-radius: 4px;
`;

const ErrorMessage = styled.span`
  color: ${defaultTheme.status.errorColor};
`;

export { ErrorMessage, FormStyles };
