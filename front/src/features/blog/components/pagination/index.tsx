import { Dispatch, SetStateAction, useEffect } from "react";

import { PageElement, PaginationWrapper, PrevNextElement } from "./style";

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

export const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  /**
   * 현재 페이지를 받아 5개 단위 페이지네이션의 시작 페이지를 반환. 예를 들어 현재 페이지가 1~5 사이이면 1을, 6~10 사이이면 6을 반환.
   *
   * @param {number} page 현재 페이지
   * @returns {number} 시작 페이지
   */
  const getStartPage = (page: number) => Math.floor((page - 1) / 5) * 5 + 1;

  return (
    <PaginationWrapper>
      {/* 페이지네이션 좌측 '첫 페이지로', '이전 5개' 이동용 화살표 */}
      {getStartPage(page) === 1 || (
        <>
          <PrevNextElement tooltip="첫 페이지로" onClick={() => setPage(1)}>
            {"<<"}
          </PrevNextElement>
          <PrevNextElement
            tooltip="이전 5개"
            onClick={() => setPage(getStartPage(page - 5))}
          >
            {"<"}
          </PrevNextElement>
        </>
      )}

      {/* 페이지네이션 */}
      {[...Array(5)].map((_, idx) => {
        const startPage = getStartPage(page);
        return (
          startPage + idx <= totalPages && (
            <PageElement
              isSelected={page === startPage + idx}
              onClick={() => setPage(startPage + idx)}
              key={idx}
            >
              {startPage + idx}
            </PageElement>
          )
        );
      })}

      {/* 페이지네이션 우측 '다음 5개', '마지막 페이지로' 이동용 화살표 */}
      {getStartPage(page) === getStartPage(totalPages) || (
        <>
          <PrevNextElement
            tooltip="다음 5개"
            onClick={() =>
              page !== totalPages && setPage(getStartPage(page + 5))
            }
          >
            {">"}
          </PrevNextElement>
          <PrevNextElement
            tooltip="마지막 페이지로"
            onClick={() => setPage(totalPages)}
          >
            {">>"}
          </PrevNextElement>
        </>
      )}
    </PaginationWrapper>
  );
};
