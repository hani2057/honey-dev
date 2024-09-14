import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { PostPostReq, usePostPost } from "@features/blog/api";
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
  const selectedCategoryId = useAtomValue(selectedCategoryIdAtom);
  const isEditingCategoryName = useAtomValue(isEditingCategoryNameAtom);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<PostPostReq>({
    mode: "onChange",
  });
  const { mutateAsync } = usePostPost();

  /**
   * 포스트 등록
   */
  const onSubmit: SubmitHandler<PostPostReq> = async (data) => {
    const { postId } = await mutateAsync({
      ...data,
      categoryId: selectedCategoryId,
    });
    navigate(PATH.BLOG.POST.INDEX(postId), { replace: true });
  };

  return (
    <CategoryWrapper onSubmit={handleSubmit(onSubmit)}>
      <FlexDiv direction="column" $align="start" $gap={1} $pWidth={70}>
        <FlexDiv $pWidth={100}>
          <Text $bold={true}>제목</Text>
          <PostRegisterInput
            {...register("title", {
              required: true,
              validate: (v) => v.trim().length !== 0,
              maxLength: 50,
            })}
          />
        </FlexDiv>
        <FlexDiv $pWidth={100}>
          <Text $bold={true}>부제목</Text>
          <PostRegisterInput {...register("subtitle", { maxLength: 50 })} />
        </FlexDiv>
        <FlexDiv $pWidth={100}>
          <Text $bold={true}>한줄요약</Text>
          <PostRegisterInput {...register("description", { maxLength: 200 })} />
        </FlexDiv>
        <Text $bold={true}>본문</Text>
        {/* TODO: content 길이 validation */}
        <MDEditor {...register("content", { required: true })} />
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
