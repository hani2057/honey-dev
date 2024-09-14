import { ChangeHandler } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { MDEditorWrapper } from "./style";

interface MDEditorProps {
  width?: number;
  height?: number;
  pWidth?: number;
  pHeight?: number;
  onChange: ChangeHandler;
  name: string;
}

export const MDEditor = ({
  width,
  height,
  pWidth,
  pHeight,
  onChange,
  name,
}: MDEditorProps) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["code-block", "link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      // ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "code-block",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  // 참고한 블로그 글: https://velog.io/@soorokim/react-hook-form-react-quill-%EB%AF%B8%EC%84%B8%ED%8C%81-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0
  const handleOnChange = (
    value: string
    // d: any,
    // s: any,
    // editor: ReactQuill.UnprivilegedEditor
  ) => {
    onChange({ target: { name, value } });
  };

  return (
    <MDEditorWrapper
      width={width}
      height={height}
      pWidth={pWidth}
      pHeight={pHeight}
    >
      <ReactQuill
        theme="snow"
        onChange={handleOnChange}
        modules={modules}
        formats={formats}
        style={{ height: "calc(100% - 2.5rem - 2px" }}
      />
    </MDEditorWrapper>
  );
};
