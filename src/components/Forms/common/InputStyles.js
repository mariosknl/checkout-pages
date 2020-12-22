import styled from "styled-components";

import * as theme from "../../../utils";

const { defaultTheme } = theme;

const InputStyles = styled.input`
  width: 80%;
  margin: 0 auto;
  border: 1px solid ${defaultTheme.borderColor};
`;

export { InputStyles };
