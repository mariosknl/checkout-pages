import styled from "styled-components";

const FormStylesStories = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  input {
    display: flex;
    margin-bottom: 0.5rem;
  }

  select {
    width: 100%;
    padding: 0.3rem;
  }
  input[type="checkbox"] {
    display: inline-block;
    margin: 0;
    margin-top: 0.7rem;
    margin-right: 0.4rem;
    margin-bottom: 0.8rem;
  }
`;

export default FormStylesStories;
