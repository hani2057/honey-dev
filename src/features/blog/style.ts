import { styled } from "styled-components";

const BlogOutletWrapper = styled.div`
  width: 66%;
  height: 100%;
  overflow-y: scroll;
  background-color: #ffffff;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { BlogOutletWrapper };
