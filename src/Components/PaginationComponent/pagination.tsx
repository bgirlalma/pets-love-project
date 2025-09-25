import { useState, useMemo, useEffect } from "react";
import IconLeft from "../../Image/notices/symbol-defs.svg";
import IconDoubleLeft from "../../Image/notices/symbol-defs.svg";
import IconRight from "../../Image/notices/symbol-defs.svg";
import IconDoubleRight from "../../Image/notices/symbol-defs.svg";
import {
  PaginationButtonContainer,
  ButtonReturnOnePage,
  ButtonPreviuosPage,
  PagesContainer,
  Pages,
  ButtonNextPage,
  ButtonLastPage,
} from "./pagination.styled";

interface PaginationProps<T> {
  data: T[];
  itemsPerPage?: number;
  renderItems: (items: T[]) => JSX.Element;
}

const PaginationComponent = <T,>({
  data,
  itemsPerPage = 6,
  renderItems,
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxVisiblePages, setMaxVisiblePages] = useState(() =>
    window.innerWidth > 768 ? 3 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setMaxVisiblePages(window.innerWidth > 768 ? 3 : 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const goToPage = (page: number) => setCurrentPage(page);
  const goToNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

 const visiblePages = useMemo<(number | string)[]>(() => {
   const pages: (number | string)[] = [];
   const total = totalPages;

   if (total <= maxVisiblePages) {
     // Все страницы показываем, если их мало
     for (let i = 1; i <= total; i++) pages.push(i);
   } else {
     const sidePages = Math.floor((maxVisiblePages - 1) / 2); // сколько страниц слева и справа от текущей
     let start = Math.max(2, currentPage - sidePages);
     let end = Math.min(total - 1, currentPage + sidePages);

     // Корректировка, если текущая страница близка к началу
     if (currentPage <= sidePages + 1) {
       start = 2;
       end = maxVisiblePages;
     }

     // Корректировка, если текущая страница близка к концу
     if (currentPage >= total - sidePages) {
       start = total - maxVisiblePages + 1;
       end = total - 1;
     }

     pages.push(1); // первая страница

     if (start > 2) pages.push("…"); // точки слева, если есть пропущенные

     for (let i = start; i <= end; i++) pages.push(i);

     if (end < total - 1) pages.push("…"); // точки справа, если есть пропущенные

     pages.push(total); // последняя страница
   }

   return pages;
 }, [totalPages, currentPage, maxVisiblePages]);

  if (data.length === 0) return <div>Нічого не знайдено</div>;
  return (
    <div>
      {/* Відображення елементів поточної сторінки */}
      <div>{renderItems(currentItems)}</div>

      {/* Пагінація - показуємо тільки якщо більше однієї сторінки */}
      {totalPages > 1 && (
        <PaginationButtonContainer>
          {/* Кнопка до першої сторінки */}
          <ButtonReturnOnePage
            type="button"
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
          >
            <svg width="40" height="40">
              <use href={`${IconDoubleLeft}#icon-sliderDoubleLeft`}></use>
            </svg>
          </ButtonReturnOnePage>

          {/* Кнопка до попередньої сторінки */}
          <ButtonPreviuosPage
            type="button"
            onClick={goToPrev}
            disabled={currentPage === 1}
          >
            <svg width="40" height="40">
              <use href={`${IconLeft}#icon-slider`}></use>
            </svg>
          </ButtonPreviuosPage>

          {/* Номери сторінок */}
          <PagesContainer>
            {visiblePages.map((pageNum, index) =>
              typeof pageNum === "number" ? (
                <Pages
                  key={pageNum}
                  type="button"
                  onClick={() => goToPage(pageNum)}
                  $isActive={currentPage === pageNum}
                >
                  {pageNum}
                </Pages>
              ) : (
                <Pages key={index} >
                  …
                </Pages>
              )
            )}
          </PagesContainer>

          {/* Кнопка до наступної сторінки */}
          <ButtonNextPage
            type="button"
            onClick={goToNext}
            disabled={currentPage === totalPages}
          >
            <svg width="40" height="40">
              <use href={`${IconRight}#icon-sliderRight`}></use>
            </svg>
          </ButtonNextPage>

          {/* Кнопка до останньої сторінки */}
          <ButtonLastPage
            type="button"
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <svg width="40" height="40">
              <use href={`${IconDoubleRight}#icon-sliderDoubleRight`}></use>
            </svg>
          </ButtonLastPage>
        </PaginationButtonContainer>
      )}
    </div>
  );
};

export default PaginationComponent;
