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
  //масив елементів
  data: T[];
  // кол-во елем. на стр
  itemsPerPage?: number;
  // функ для рендеру поточних елем на стр
  renderItems: (items: T[]) => JSX.Element;
}

const PaginationComponent = <T,>({
  data,
  itemsPerPage = 6,
  renderItems,
}: PaginationProps<T>) => {
  // поточна стр
  const [currentPage, setCurrentPage] = useState(1);
  // кіл-ть стр, які показуються у пагінації
  const [maxVisiblePages, setMaxVisiblePages] = useState(() =>
    window.innerWidth > 768 ? 3 : 2
  );

  const [highestVisitedPage, setHighestVisitedPage] = useState(1);

  // адаптовуємо пагінацію під ширину екрана
  useEffect(() => {
    const handleResize = () => {
      setMaxVisiblePages(window.innerWidth > 768 ? 3 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // яка кіл-ть стр у нас буде, маючи певну кіл-ть елем. Math.ceil - фунц для округлення
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // поточна стр.
  const currentItems = useMemo(() => {
    // показуємо з якого елем почати показ стр
    //  (1 - 1) * 6 = 0 → починаємо з першого елемента (індекс 0).
    //  (2 - 1) * 6 = 6 → починаємо з елемента з індексом 6.
    //  (3 - 1) * 6 = 12 → починаємо з елемента з індексом 12.
    const start = (currentPage - 1) * itemsPerPage;
    // беремо шматок масиву, який треба показати на стр.
    return data.slice(start, start + itemsPerPage);
    // РОбимо розрахунок тільки тоді коли змінюється data, currentPage, itemsPerPage
  }, [data, currentPage, itemsPerPage]);

  // скидаємо стр, при змінні данних
  useEffect(() => {
    setCurrentPage(1);
    setHighestVisitedPage(1);
  }, [data]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    if (page > highestVisitedPage) {
      setHighestVisitedPage(page);
    }
  };

  const goToNext = () => {
    // перехід на наступну стр. не можимо піти далі останьої стр
    const nextPage = Math.min(currentPage + 1, totalPages);
    // оновлюємо стран
    setCurrentPage(nextPage);

    if (nextPage > highestVisitedPage) {
      setHighestVisitedPage(nextPage);
    }
  };

  const goToPrev = () => {
    // перехід на попередню стр. Слідкуємо щоб не піти далі 1 стр
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // створюємо масив сторінок, які будуть видимі в пагінації
  const visiblePages = useMemo<(number | string)[]>(() => {
    const pages: (number | string)[] = [];
    const total = totalPages;
    const isMobile = maxVisiblePages === 2;

    // якщо кіл-ть стр наприклад 2, то точки не додаємо
    if (total <= maxVisiblePages) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    if (isMobile) {
      // на моб показ макс 2 стр.
      const groupSize = 2;

      // відслідковуємо групу елем
      const groupStart =
        Math.floor((currentPage - 1) / groupSize) * groupSize + 1;
      let groupEnd = groupStart + groupSize - 1;

      // Додаємо автоматично наступну сторінку, якщо клікнули на останню сторінку групи
      if (currentPage === groupEnd && groupEnd < total) {
        groupEnd += 1;
      }

      // відслідю щоб не вийти за межі
      groupEnd = Math.min(groupEnd, total);

      // йдемо від 1 до останьої стр. Додаємо кожну стр у visiblePages
      for (let i = groupStart; i <= groupEnd; i++) pages.push(i);

      // перевіряємо чи є ще стр після поточної групи. Якщо так додаємо крапки
      if (groupEnd < total) pages.push("…");

      return pages;
    }


    // 💻 Десктоп / планшет — 3 сторінки + точки
    const sidePages = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - sidePages);
    let end = Math.min(start + maxVisiblePages - 1, total);

    if (end === total) {
      start = Math.max(total - maxVisiblePages + 1, 1);
    }

    for (let i = start; i <= end; i++) pages.push(i);

    if (end < total) pages.push("…");

    return pages;
    // робимо обчислення тільки коли змінюються ці дані 
  }, [totalPages, currentPage, maxVisiblePages, highestVisitedPage]);

  if (data.length === 0) return <div>Нічого не знайдено</div>;

  return (
    <div>
      <div>{renderItems(currentItems)}</div>

      {totalPages && (
        <PaginationButtonContainer>
          <ButtonReturnOnePage
            type="button"
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
          >
            <svg width="40" height="40">
              <use href={`${IconDoubleLeft}#icon-sliderDoubleLeft`}></use>
            </svg>
          </ButtonReturnOnePage>

          <ButtonPreviuosPage
            type="button"
            onClick={goToPrev}
            disabled={currentPage === 1}
          >
            <svg width="40" height="40">
              <use href={`${IconLeft}#icon-slider`}></use>
            </svg>
          </ButtonPreviuosPage>

          <PagesContainer>
            {visiblePages.map((pageNum, index) =>
              typeof pageNum === "number" ? (
                <Pages
                  key={
                    typeof pageNum === "number"
                      ? `page-${pageNum}`
                      : `dots-${index}`
                  }
                  type="button"
                  onClick={() =>
                    typeof pageNum === "number" && goToPage(pageNum)
                  }
                  $isActive={currentPage === pageNum}
                >
                  {pageNum}
                </Pages>
              ) : (
                <Pages key={index}>…</Pages>
              )
            )}
          </PagesContainer>

          <ButtonNextPage
            type="button"
            onClick={goToNext}
            disabled={currentPage === totalPages}
          >
            <svg width="40" height="40">
              <use href={`${IconRight}#icon-sliderRight`}></use>
            </svg>
          </ButtonNextPage>

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
