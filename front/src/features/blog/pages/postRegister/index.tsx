import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { PostPostReq, usePostPost } from "@features/blog/api";
import { Category, EditCategory } from "@features/blog/components";
import { categoryIdToRegisterAtom } from "@features/blog/store";
import { PATH } from "@router/path";
import { useAtomValue } from "jotai";

import { FlexDiv, Text } from "@components/elements";
import { MDEditor } from "@components/markdownEditor";

import { PostButton, PostRegisterForm, PostRegisterInput } from "./style";

export const PostRegister = () => {
  const [editCategory, setEditCategory] = useState(false);
  const categoryIdToRegister = useAtomValue(categoryIdToRegisterAtom);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PostPostReq>({
    mode: "onChange",
  });
  const { mutateAsync } = usePostPost();

  /**
   * 포스트 등록
   */
  const onSubmit: SubmitHandler<PostPostReq> = async (data) => {
    const { postId } = await mutateAsync({
      ...data,
      categoryId: categoryIdToRegister,
    });
    navigate(PATH.BLOG.POST.INDEX(postId), { replace: true });
  };

  return (
    <>
      <PostRegisterForm onSubmit={handleSubmit(onSubmit)}>
        {/* 제목, 부제목, 한줄요약, 내용 기입 영역 */}
        <FlexDiv direction="column" $align="start" $gap={1} $pWidth={70}>
          <FlexDiv $pWidth={100}>
            <Text $bold={true}>제목</Text>
            <PostRegisterInput
              {...register("title", {
                required: true,
                validate: (v) => v.trim().length !== 0,
                maxLength: 50,
                onChange: (e) => {
                  const value = e.target.value;
                  if (value.length > 50) {
                    setValue("title", value.substring(0, 50));
                  }
                },
              })}
              aria-invalid={errors.title ? "true" : "false"}
              placeholder="제목(최대 50자)"
            />
          </FlexDiv>
          <FlexDiv $pWidth={100}>
            <Text $bold={true}>부제목</Text>
            <PostRegisterInput
              {...register("subtitle", {
                maxLength: 50,
                onChange: (e) => {
                  const value = e.target.value;
                  if (value.length > 50) {
                    setValue("subtitle", value.substring(0, 50));
                  }
                },
              })}
              aria-invalid={errors.subtitle ? "true" : "false"}
              placeholder="부제목(최대 50자)"
            />
          </FlexDiv>
          <FlexDiv $pWidth={100}>
            <Text $bold={true}>한줄요약</Text>
            <PostRegisterInput
              {...register("description", { maxLength: 200 })}
              aria-invalid={errors.description ? "true" : "false"}
              placeholder="한줄요약(최대 200자)"
            />
          </FlexDiv>
          <FlexDiv $pWidth={100} $justify="space-between">
            <Text $bold={true}>본문</Text>
            {errors.title?.type === "required" && <p>제목을 입력해주세요.</p>}
            {errors.description?.type === "maxLength" && (
              <p>한줄요약은 최대 200자까지 가능합니다.</p>
            )}
            {errors.content?.type === "required" && <p>내용을 입력해주세요.</p>}
          </FlexDiv>
          {/* TODO: content 공백 입력 제한 validation */}
          <MDEditor
            {...register("content", { required: true })}
            aria-invalid={errors.content ? "true" : "false"}
          />
        </FlexDiv>

        {/* 카테고리 선택 영역 */}
        <FlexDiv
          direction="column"
          $justify="space-between"
          $align="start"
          $pWidth={30}
        >
          <FlexDiv direction="column" $gap={1} $align="start" $pWidth={100}>
            <FlexDiv $justify="space-between" $pWidth={100}>
              <Text $bold={true}>카테고리 선택</Text>
              <Text $pointer={true} onClick={() => setEditCategory(true)}>
                <AiOutlineEdit />
              </Text>
            </FlexDiv>
            <Category type="register" />
          </FlexDiv>
          <PostButton type="submit">Post</PostButton>
        </FlexDiv>
      </PostRegisterForm>

      {/* TODO: CSS(ux/ui) */}
      {editCategory && <EditCategory setEditCategory={setEditCategory} />}
    </>
  );
};
