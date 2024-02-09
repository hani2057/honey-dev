import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

import { FlexDiv } from "@components/elements";

const PostSummary = styled(FlexDiv)`
  width: 100%;
  border: 1px solid ${COLORS.main[200]};
  border-radius: 12px;
  padding: 1.25rem;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.main["050"]};
  }
`;

export { PostSummary };
