import styled from "styled-components";

const FormStylesStories = styled.div`
  width: 40%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  form {
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  button {
    margin-top: 3.5rem;
    margin-left: 1.5rem;
  }

  input {
    display: flex;
    border: 1px solid black;
  }

  .error {
    color: red;
  }
`;

export default FormStylesStories;
