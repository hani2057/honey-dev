import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

const CategoryWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - var(--nav-height));
  padding: 3rem;
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

export { CategoryWrapper, PostButton };
