import { Dispatch, SetStateAction, Suspense, lazy } from "react";

import "react-quill/dist/quill.snow.css";

import { MDEditorWrapper } from "./style";

const QuillEditor = lazy(() => import("react-quill"));

interface MDEditorProps {
  width?: number;
  height?: number;
  pWidth?: number;
  pHeight?: number;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const MDEditor = ({
  width,
  height,
  pWidth,
  pHeight,
  value,
  setValue,
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
      ["link", "image"],
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
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDEditorWrapper
        width={width}
        height={height}
        pWidth={pWidth}
        pHeight={pHeight}
      >
        <QuillEditor
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          style={{ height: "calc(100% - 2.5rem - 2px" }}
        />
      </MDEditorWrapper>
    </Suspense>
  );
};
