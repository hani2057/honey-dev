import { COLORS } from "@styles/colors";
import { styled } from "styled-components";

const MDEditorWrapper = styled.div<{
  width?: number;
  height?: number;
  pWidth?: number;
  pHeight?: number;
}>`
  width: ${({ width, pWidth }) =>
    width ? `${width}rem` : `${pWidth || 100}%`};
  height: ${({ height, pHeight }) =>
    height ? `${height}rem` : `${pHeight || 100}%`};
  background-color: ${COLORS.grey[100]};
`;

export { MDEditorWrapper };
