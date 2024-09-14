import { FormEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import { usePostPost } from "@features/blog/api";
import { Category } from "@features/blog/components";
import {
  isEditingCategoryNameAtom,
  selectedCategoryIdAtom,
} from "@features/blog/store";
import { PATH } from "@router/path";
import { useAtomValue } from "jotai";

import { FlexDiv, Text } from "@components/elements";
import { MDEditor } from "@components/markdownEditor";

import { CategoryWrapper, PostButton, PostRegisterInput } from "./style";

export const PostRegister = () => {
  const [type, setType] = useState<"register" | "edit">("register");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const selectedCategoryId = useAtomValue(selectedCategoryIdAtom);
  const isEditingCategoryName = useAtomValue(isEditingCategoryNameAtom);

  const navigate = useNavigate();

  /**
   * 포스트 등록
   */
  const handleSubmitPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: validation
    // type === "register" && title.trim().length !== 0

    const { postId } = await mutateAsync({
      title,
      subtitle,
      description,
      content,
      categoryId: selectedCategoryId,
    });
    navigate(PATH.BLOG.POST.INDEX(postId));
  };

  const { mutateAsync } = usePostPost();

  return (
    <CategoryWrapper onSubmit={handleSubmitPost}>
      <FlexDiv direction="column" $align="start" $gap={1} $pWidth={70}>
        <FlexDiv $pWidth={100}>
          <Text $bold={true}>제목</Text>
          <PostRegisterInput onChange={(e) => setTitle(e.target.value)} />
        </FlexDiv>
        <FlexDiv $pWidth={100}>
          <Text $bold={true}>부제목</Text>
          <PostRegisterInput onChange={(e) => setSubtitle(e.target.value)} />
        </FlexDiv>
        <FlexDiv $pWidth={100}>
          <Text $bold={true}>한줄요약</Text>
          <PostRegisterInput onChange={(e) => setDescription(e.target.value)} />
        </FlexDiv>
        <Text $bold={true}>본문</Text>
        <MDEditor value={content} setValue={setContent} />
      </FlexDiv>
      <FlexDiv
        direction="column"
        $justify="space-between"
        $align="start"
        $pWidth={30}
      >
        <FlexDiv direction="column" $gap={1} $align="start">
          <FlexDiv $gap={3}>
            <Text $bold={true}>카테고리 선택</Text>
            {type === "register" ? (
              <Text
                $bold={true}
                size={0.75}
                $pointer={true}
                onClick={() => setType("edit")}
              >
                수정
              </Text>
            ) : (
              <>
                <Text
                  $bold={true}
                  size={0.75}
                  $pointer={true}
                  onClick={() => isEditingCategoryName || setType("register")}
                >
                  완료
                </Text>
                <Text
                  $bold={true}
                  size={0.75}
                  $pointer={true}
                  onClick={() => isEditingCategoryName || setType("register")}
                >
                  취소
                </Text>
              </>
            )}
          </FlexDiv>
          <Category type={type} />
        </FlexDiv>
        <PostButton type="submit">Post</PostButton>
      </FlexDiv>
    </CategoryWrapper>
  );
};
