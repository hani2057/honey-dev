import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

const CategoryWrapper = styled.form`
  display: flex;
  min-height: calc(100vh - var(--nav-height));
  padding: 2rem 3rem;
  gap: 5rem;
`;

const PostButton = styled.button`
  padding: 1rem 4rem;
  font-weight: 700;
  background-color: ${COLORS.grey[100]};
  border-radius: 3rem;
  border: none;
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`;

const PostRegisterInput = styled.input`
  margin-left: 1.5rem;
  flex-grow: 1;
  padding: 0.1rem 0.2rem;

  &:focus {
    outline: none;
  }
`;

export { CategoryWrapper, PostButton, PostRegisterInput };
