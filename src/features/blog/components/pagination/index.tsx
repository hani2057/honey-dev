import { useState } from "react";

import { PageElement, PaginationWrapper, PrevNextElement } from "./style";

export const Pagination = () => {
  // TODO: currentPage props로 받아서 사용하게 될 듯
  const [currentPage, setCurrentPage] = useState(1);

  // dummy data
  const totalPageCnt = 23;

  /**
   * 현재 페이지를 받아 5개 단위 페이지네이션의 시작 페이지를 반환. 예를 들어 현재 페이지가 1~5 사이이면 1을, 6~10 사이이면 6을 반환.
   *
   * @param {number} currentPage 현재 페이지
   * @returns {number} 시작 페이지
   */
  const getStartPage = (currentPage: number) =>
    Math.floor((currentPage - 1) / 5) * 5 + 1;

  return (
    <PaginationWrapper>
      {/* 페이지네이션 좌측 '첫 페이지로', '이전 5개' 이동용 화살표 */}
      {getStartPage(currentPage) === 1 || (
        <>
          <PrevNextElement
            tooltip="첫 페이지로"
            onClick={() => setCurrentPage(1)}
          >
            {"<<"}
          </PrevNextElement>
          <PrevNextElement
            tooltip="이전 5개"
            onClick={() => setCurrentPage(getStartPage(currentPage - 5))}
          >
            {"<"}
          </PrevNextElement>
        </>
      )}

      {/* 페이지네이션 */}
      {[...Array(5)].map((_, idx) => {
        const startPage = getStartPage(currentPage);
        return (
          startPage + idx <= totalPageCnt && (
            <PageElement
              isSelected={currentPage === startPage + idx}
              onClick={() => setCurrentPage(startPage + idx)}
              key={idx}
            >
              {startPage + idx}
            </PageElement>
          )
        );
      })}

      {/* 페이지네이션 우측 '다음 5개', '마지막 페이지로' 이동용 화살표 */}
      {getStartPage(currentPage) === getStartPage(totalPageCnt) || (
        <>
          <PrevNextElement
            tooltip="다음 5개"
            onClick={() =>
              currentPage !== totalPageCnt &&
              setCurrentPage(getStartPage(currentPage + 5))
            }
          >
            {">"}
          </PrevNextElement>
          <PrevNextElement
            tooltip="마지막 페이지로"
            onClick={() => setCurrentPage(totalPageCnt)}
          >
            {">>"}
          </PrevNextElement>
        </>
      )}
    </PaginationWrapper>
  );
};
