import { styled } from "styled-components";

const BlogOutletWrapper = styled.div`
  padding-left: 17vw;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { BlogOutletWrapper };
